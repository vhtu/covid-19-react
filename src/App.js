import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';
import Highlight from './components/Highlight';
import React, { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './components/apis';
import { sortBy } from 'lodash';
import { Container, Typography } from '@material-ui/core';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);
  console.log("selectedCountryId: ", selectedCountryId);

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);

      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (e) => {
    //e la giá trị người dùng lựa chọn => cụ thể đó là value trong option tag
    setSelectedCountryId(e.target.value);
    console.log("selectedCountryId: ",selectedCountryId);
  };

  useEffect(() => {
    if (selectedCountryId){
      //khi có id thực hiện đi tìm slug
      const country = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId);
      const Slug = country.Slug;
      console.log("Slug: ", Slug);

      //call api
      getReportByCountry(Slug).then(
        res => {
          console.log("ReportByCountry:",res.data)
          //xóa ngày hiện tại vì dữ liệu còn chưa cập nhật đầy đủ
          res.data.pop();
          const { data } = res;
          const countries = sortBy(res.data, 'Country');

          //set vào biến report
          setReport(countries);
          console.log("Report:",report);
        }
      );
    }
  },[selectedCountryId,countries]);

  return <>
    <Container style={{ margin: 20 }}>
      <Typography variant='h2' component='h2'>
        Số liệu COVID-19
      </Typography>

      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      >
      </CountrySelector>
      <Highlight report={report}></Highlight>
      <Summary report={report} countryId={selectedCountryId}></Summary>
    </Container>
  </>
}

export default App;
