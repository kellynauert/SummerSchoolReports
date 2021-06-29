import React, { useState, useEffect } from 'react';
import DataPage from './DataPage';

const JSONDisplay = ({
  savedDataFunction,
  pages,
  updateSavedData,
  handleRemovePage,
}) => {
  const [jsonData, setJsonData] = useState();
  const [keys, setKeys] = React.useState(['']);
  const [options, setOptions] = useState(['']);
  const [type, setType] = useState('');

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
  }, [jsonData, pages]);

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
    if (pages) {
      return pages.map((i) => (
        <DataPage
          jsonData={jsonData}
          keys={keys}
          options={options}
          type={type}
          savedDataFunction={savedDataFunction}
          pageNumber={`page-${i}`}
          key={`page-${i}`}
          updateSavedData={updateSavedData}
          handleRemovePage={handleRemovePage}
        />
      ));
    }
  };
  return <>{renderPages()}</>;
};
export default JSONDisplay;
