import React, { useState, useEffect } from 'react';
import DataPage from './DataPage';

const JSONDisplay = ({ savedDataFunction, pages }) => {
  const [jsonData, setJsonData] = useState();
  const [keys, setKeys] = React.useState(['']);
  const [options, setOptions] = useState(['']);
  const [type, setType] = useState('');
  const [nPages, setNPages] = useState(2);

  useEffect(() => {
    setNPages(pages);
  }, [pages]);

  useEffect(() => {
    if (localStorage.getItem('json')) {
      setJsonData(JSON.parse(localStorage.getItem('json')));
    }
  }, []);

  const getGroupOptions = () => {
    let optionsList = [];
    for (let i = 0; i < jsonData.length; i++) {
      optionsList.push(jsonData[i].grades);
    }
    setOptions(optionsList);
  };

  useEffect(() => {
    if (jsonData) {
      getKeys();
      getGroupOptions();
      findType();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsonData]);

  const getKeys = () => {
    setKeys(Object.keys(jsonData[0]));
  };
  const findType = () => {
    if (jsonData[0].grades) {
      setType('grades');
    } else {
      setType('classes');
    }
  };
  const renderPages = () => {
    return pages.map((i) => (
      <DataPage
        jsonData={jsonData}
        keys={keys}
        options={options}
        type={type}
        savedDataFunction={savedDataFunction}
        pageNumber={`page-${i}`}
        key={`page-${i}`}
      />
    ));
  };
  return <>{renderPages()}</>;
};
export default JSONDisplay;
