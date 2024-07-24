// import React from 'react';
// import { Button, Box, InputBase, Typography } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';
// import { styled } from '@mui/system';

// // Custom styling for the search component
// const SearchWrapper = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: theme.palette.common.white,
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '30ch',
//     },
//   },
// }));

// const SamplePage = () => (
//   <MainCard title="Sample Card">
//     <Typography variant="body2" style={{ backgroundColor: '#B39DDB' }}>
//       Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
//       minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
//       in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
//       descent molls anim id est labours.
//     </Typography>
//     <Box display="flex" justifyContent="flex-end" mt={2} alignItems="center">
//       <Button variant="contained" style={{ backgroundColor: '#121926', color: '#fff' }} onClick={() => { alert('Clicked'); }}>
//         open
//       </Button>
//       <SearchWrapper>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder="Search…"
//           inputProps={{ 'aria-label': 'search' }}
//         />
//       </SearchWrapper>
//     </Box>
//   </MainCard>
// );

// export default SamplePage;
import React, { useState } from 'react';
import { Button, Modal, Box, Typography,TextField, Paper, Table, TableHead, TableRow, TableCell, TableBody,TableContainer } from '@mui/material';
const Index = () => {
  const [open, setOpen] = useState(false);
  const [formData,setFormData]=useState({name:"",age:"",city:""});
  const [tableData,setTableData]=useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    setTableData([...tableData, formData]);
    setFormData({ name: '', age: '', city: '' });
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        +add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 12,
          }}
        >
          <TextField id="name" label="name" variant="outlined" value={formData.name}onChange={handleChange}/>
          <TextField id="age" label="age" variant="outlined"value={formData.age}onChange={handleChange}/>
          <TextField id="city" label="city" variant="outlined" value={formData.city}onChange={handleChange}/>
          <Button onClick={handleSubmit} variant='contained'>submit</Button>
        </Box>
      </Modal>
      <TableContainer component={Paper} sx={{mt:4}}>
       <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>age</TableCell>
            <TableCell>city</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))}
        </TableBody>
       </Table>
     </TableContainer>
    </div>
  );
};

export default Index;
