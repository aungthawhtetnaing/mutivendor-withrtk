import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import { Link, useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import { useState } from 'react';
import { detailBanner } from '../../../Redux/Components/BannerManage/AllBannerSlice';
import { DivisionDetail } from '../../../Redux/Components/ShippingArea/AllDivision/AllDivisionSlice';
import { DistrictDetail } from '../../../Redux/Components/ShippingArea/AllDistrict/AllDistrictSlice';




function createData(name, code,district ,size) {
  const density = size;
  return { name, code,district, size };
}





export default function AllDistrict() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [todoUser,setTodoUser] = useState([]);
  const columns = [
    { id: 'name', label: 'SI', minWidth: 170 },
    { id: 'code', label: 'Division Name', minWidth: 100 },
    { id: 'district', label: 'District Name', minWidth: 100 },
   
    {
      id: 'size',
      label: 'Action',
      minWidth: 170,
      align: 'center',
      format: (id) => <div>
                            <Link to={`/dashboard/editdistrict/${id}`} style={{textDecoration:'none',color:"black"}} >
                              <Button 
                          variant='contained' endIcon={<EditNoteTwoToneIcon/>} sx={{color:"white",backgroundColor:"green"}}>
                                Edit
                              </Button>
                            </Link>&nbsp;
                            <Button variant='contained'  onClick={()=>handleDelete(id)} endIcon={<DeleteIcon/>} sx={{color:"white",backgroundColor:"red"}}>Delete</Button>
                            </div>,
    },
    
  
  ];


  function handleDelete(id){
    swal({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        fetch(`http://192.168.2.106:9999/api/admin/shipping/district/${id}`,{
          method:'DELETE'
  
      }).then((result)=>{
          result.json().then((resp)=>{
          console.log(resp);
          const list = todoUser.filter((todo) => todo.id != resp?.data?.id)
          setTodoUser(list);
          })
      })
      }
    });
}

// useEffect(()=>{
//   dispatch(fetchUsers())
// },[todoUser])


  // const handleDelete=(id)=>{
  //   console.log(id);
  //   dispatch(deleBrand({id}))
  // }
 
  const navigate = useNavigate()


const AllDistrict=useSelector(state=>state.allDistrict.addDist)
console.log("District",AllDistrict);

useEffect(()=>{
  dispatch(DistrictDetail())
},[])


const rows = AllDistrict?.map(district => createData(district.id, district.division,district.district_name ));

const dispatch=useDispatch();

useEffect(()=>{
  dispatch(DistrictDetail())
  
},[todoUser])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  

  return (

    <div>
      <Typography sx={{fontSize:"25px" ,fontWeight:"bold",marginBottom:"20px"}}>All District</Typography>
    <Grid item sx={12}>
    <Link to={`/dashboard/adddistrict`} style={{textDecoration:'none',color:"black"}} >
        <Button variant='contained' sx={{backgroundColor:"green"}}>
            Add Division
        </Button>
    </Link>
    </Grid>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                   {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(row.name) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
