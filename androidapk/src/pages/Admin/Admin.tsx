import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import {useState} from 'react'
import { Slider } from '@mui/material';
import { Checkbox } from '@mui/material';
import React from 'react';
import { Button, Modal, Box } from '@mui/material';
import {useApiData}  from './../../hooks/useApiData.js';
import * as XLSX from 'xlsx';




const GenericHeader = () => {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const { data: apiData, isLoading, error, apiCall } = useApiData('POST', 'Masters/bulkInsert', 'Kevinbhai', true);
  
  const convertArrayToExcel = (dataArray, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(dataArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    
    // Create a temporary anchor element to download the Excel file
    const anchor = document.createElement('a');
    const url = window.URL.createObjectURL(data);
    anchor.href = url;
    anchor.download = `${filename}.xlsx`;
    anchor.click();
    window.URL.revokeObjectURL(url);
  };
  
  const data = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'Los Angeles' },
    { name: 'Bob', age: 35, city: 'Chicago' }
  ];
  
  const [formData,setFormData] = useState({})
  
  const [value1, setValue1] = useState([0, 100]);
  const handleChangeSLider = (event, newValue) => {
    setValue1(newValue);
  };
  
   const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  const handleExportClick = () => {
    convertArrayToExcel(data, 'data_export');
  };



  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
 

  const handleButtonClick = (modalType) => {
    setActiveModal(modalType);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setActiveModal(null);
  };
  
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  
  const handleFileUpload = () => {
  if (selectedFile) {
    // Call the returned apiCall function with the selected file as parameter
      apiCall(selectedFile);
    }
  };
  

  const renderModalContent = () => {
    // Customize the content for each modal type
    switch (activeModal) {
      case 'modal1':
        return (
          <div>
              <FormControl>
                <FormLabel>name</FormLabel>
                <TextField 
                    label="name"
                    type="text"
                    name="name"
                    fullWidth
                    value={formData?.name || ""}
                    onChange={handleChange}
                />
                <FormLabel>email</FormLabel>
                <TextField 
                    label="email"
                    type="email"
                    name="email"
                    fullWidth
                    value={formData?.email || ""}
                    onChange={handleChange}
                />
                <FormLabel>address</FormLabel>
                <TextField 
                    label="address"
                    type="text"
                    name="address"
                    fullWidth
                    value={formData?.address || ""}
                    onChange={handleChange}
                />
                <FormLabel>phone</FormLabel>
                <TextField 
                    label="phone"
                    type="number"
                    name="phone"
                    fullWidth
                    value={formData?.phone || ""}
                    onChange={handleChange}
                />
                <Button onClick={()=> console.log(formData)} type="button" variant="contained">ADD</Button>
        
    </FormControl>
          </div>
        );
        case 'modal2':
          return (
            <div>
            <h2>You Can Upload Your Files over Here</h2>
            <input type="file" onChange={handleFileSelect} />
            <Button onClick={handleFileUpload}
             style={{ backgroundColor: 'black' }}>
              Upload File
            </Button>
          </div>
        );
      case 'modal3':
        return (
           <div>
      <button onClick={handleExportClick}>Export to Excel</button>
    </div>
        );
      default:
        return null;
    }
  };

  return (


    <div style={{ justifyContent: 'center', textAlign: 'center' }}>
      <Button onClick={() => handleButtonClick('modal1')}>ADD</Button>
      <Button onClick={() => handleButtonClick('modal2')}>UPLOAD</Button>
      <Button onClick={() => handleButtonClick('modal3')}>EXPORT</Button>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box sx={{ display: 'flex', 
        justifyContent: 'center',
         alignItems: 'center',
          minHeight: '100vh' }}>
          {renderModalContent()}
          <Button  style={{color:"black",border:'1px solid black', }}onClick={handleModalClose}>Close</Button>
        
          </Box>
      
      </Modal>
   
    </div>
   
  );
};

export default GenericHeader;














