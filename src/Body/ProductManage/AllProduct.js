import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Chip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allBrandData } from '../../Redux/Components/Brand/allBrandSlice';
import { NotificationsActiveOutlined, TramSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import { Link, useNavigate } from 'react-router-dom';
import { deleBrand } from '../../Redux/Components/Brand/deleteBrandSlice';
import swal from 'sweetalert';
import { useState } from 'react';
import { slideDetail } from '../../Redux/Components/SliderManage/allSliderSlice';
import { productDetail } from '../../Redux/Components/ProductManage/AllProductSlice';



function createData(name, code,short, population,qty,discount,status, size) {
  const density = population / size;
  return { name, code,short, population,qty,discount,status, size };
}





export default function AllProduct() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [todoUser,setTodoUser] = useState([]);

  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleToggle = () => {
    setIsButtonActive(!isButtonActive);
  };

  
  const columns = [
    { id: 'name', label: 'SI', minWidth: 100 },
    /////
    {
        id: 'code',
        label: 'Image',
        minWidth: 130,
        align: 'left',
         format: (value) => <img src={value} alt="Brand" height="50" />,
      },
    { id: 'short', label: 'Product Name', minWidth: 50 },
    { id: 'population', label: 'Price', minWidth: 50 ,
    format: (value) => <div><p>${value}</p></div>,
        },
    { id: 'qty', label: 'qty', minWidth: 50 },
    { 
        id: 'discount',
        label: 'Discount',
        minWidth: 100,
        format: (dis, pri) => (
          <div>
              <Chip label={`${((pri - dis) * 100 / pri).toFixed(0)}%`} color="warning" />
          </div>
        )
      },
    { id: 'status', label: 'Status', minWidth: 50   
    , format: (value) =><div>
    {value <=0 ?<Chip label='inactive' color='error'/>  : <Chip label='active' color='success'/>}
    </div>,},
  //////
  
    {
      id: 'size',
      label: 'Action',
      minWidth: 50,
      align: 'center',
      format: (id) => <div>
                            <Link to={`/dashboard/editslider/${id}`} style={{textDecoration:'none',color:"black"}} >
                              <Button 
                          variant='contained'  sx={{color:"white",backgroundColor:"green"}}>
                                <EditNoteTwoToneIcon/>
                              </Button>
                            </Link>&nbsp;
                            <Button variant='contained'  onClick={()=>handleDelete(id)} sx={{color:"white",backgroundColor:"red"}}>
                            <DeleteIcon/>
                            </Button>
                            <Button variant='contained'  onClick={()=>handlebutton(id)} sx={{color:"white",backgroundColor:"gray"}}>
                            <NotificationsActiveOutlined/>
                            </Button>
                            </div>,
    },
    
  
  ];

  const handlebutton=(id)=>{
    console.log(id);
  }


  function handleDelete(id){
    swal({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        fetch(`http://192.168.2.106:9999/api/admin/slider/${id}`,{
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

const AllProduct=useSelector(state=>state.allProduct?.product)
console.log("allProduct",AllProduct);
useEffect(()=>{
    dispatch(productDetail())
},[])

const slider=useSelector(state=>state.allSlide.slide?.data)
console.log("slider",slider);

useEffect(()=>{
    dispatch(slideDetail())
},[])


const rows = AllProduct?.map(slider => createData(slider.id,slider.product_thambnail, slider.name,slider.selling_price,slider.product_qty,slider.discount_price,slider.status
    ));
const dispatch=useDispatch();

useEffect(()=>{
  dispatch(slideDetail())
  
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
      {/* <Link to="editbrand"  style={{textDecoration:'none',color:"black"}} > */}
                            {/* <Button onClick={()=>{
                              navigate('/dashboard/editbrand')
                            }} variant='contained' endIcon={<DeleteIcon/>} sx={{color:"white",backgroundColor:"green"}}>
                              Edit
                            </Button> */}
                          {/* </Link> */}
      <Typography sx={{fontSize:"25px" ,fontWeight:"bold",marginBottom:"20px"}}>All Brand</Typography>
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
                          {/* {column.format ? column.format(row.name) : value} */}
                          {column.format ? 
                            (column.id === 'code' ? column.format(row.code) :
                            // column.id === 'validity' ? column.format(row.validity) :
                            column.id === 'population' ? column.format(row.population) :
                            column.id === 'status' ? column.format(row.status) :
                            column.id === 'discount' ? column.format(row.discount, row.population) :
                            column.id === 'size' ? column.format(row.name) :
                            value) 
                            : value
                          }
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
