import styled from '@emotion/styled';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAdmin } from '../Redux/Components/SideBar/dashboardSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SellIcon from '@mui/icons-material/Sell';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  backgroundColor:theme.palette.black,
  color: theme.palette.text.secondary,
}));


const Dashboard = () => {


  const dashboard = useSelector(state=>state.dashboard.dashboard)
  console.log("admin Dashbord",dashboard);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(dashboardAdmin())
  },[])


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3} >
        <Item sx={{backgroundImage:"linear-gradient( 45deg , #6a11cb , #2575fc)"}}>
        <Typography sx={{ display: 'flex', alignItems: 'center',padding:"20px",color:"white" }}>
          <Typography sx={{ flexGrow: 1 }}>${dashboard.today_sale_data} USD</Typography>
          <ShoppingCartIcon  />
        </Typography>
        <Typography sx={{padding:"20px",color:"white"}}>
          Today Sale
        </Typography>

      </Item >
        </Grid>
        <Grid item xs={3}>
        <Item sx={{backgroundImage:"linear-gradient(to right, #f9d423 0%, #ff4e50 100%)"}}>
        <Typography sx={{ display: 'flex', alignItems: 'center',padding:"20px",color:"white" }}>
          <Typography sx={{ flexGrow: 1 }}>${dashboard.monthly_sale_data} USD</Typography>
          <AttachMoneyIcon  />
        </Typography>
        <Typography sx={{padding:"20px",color:"white"}}>
          Monthly Sale
        </Typography>

      </Item >
        </Grid>
        <Grid item xs={3}>
        <Item sx={{backgroundImage:"linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)"}}>
        <Typography sx={{ display: 'flex', alignItems: 'center',padding:"20px",color:"white" }}>
          <Typography sx={{ flexGrow: 1 }}>${dashboard.yearly_sale_data} USD</Typography>
          <PeopleAltIcon  />
        </Typography>
        <Typography sx={{padding:"20px",color:"white"}}>
          Yearly Sale
        </Typography>

      </Item >
        </Grid>
        <Grid item xs={3}>
        <Item sx={{backgroundImage:"linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%)"}}>
        <Typography sx={{ display: 'flex', alignItems: 'center',padding:"20px",color:"white" }}>
          <Typography sx={{ flexGrow: 1 }}>{dashboard.pending_order_data_total} </Typography>
          <SellIcon  />
        </Typography>
        <Typography sx={{padding:"20px",color:"white"}}>
          Pending order
        </Typography>

      </Item >
        </Grid>
        <Grid item xs={3}>
        <Item sx={{backgroundImage:"linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"}}>
        <Typography sx={{ display: 'flex', alignItems: 'center',padding:"20px",color:"white" }}>
          <Typography sx={{ flexGrow: 1 }}>{dashboard.active_vendors_data} </Typography>
          <AdminPanelSettingsIcon  />
        </Typography>
        <Typography sx={{padding:"20px",color:"white"}}>
          Active vendor
        </Typography>

      </Item >
        </Grid>
        <Grid item xs={3}>
        <Item sx={{backgroundImage:"linear-gradient( 45deg , #6a11cb , #9805fc)"}}>
        <Typography sx={{ display: 'flex', alignItems: 'center',padding:"20px",color:"white" }}>
          <Typography sx={{ flexGrow: 1 }}>{dashboard.active_user_data}</Typography>
          <PersonIcon  />
        </Typography>
        <Typography sx={{padding:"20px",color:"white"}}>
          Today User
        </Typography>

      </Item >
        </Grid>
      </Grid>
      <Grid item xs={12}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SI</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Inovice</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Payment</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dashboard.pending_order_data?.map((data) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell align="left">{data.order_date}</TableCell>
              <TableCell align="left">{data.invoice_no}</TableCell>
              <TableCell align="left">${data.amount}</TableCell>
              <TableCell align="left">{data.payment_method}</TableCell>
              <TableCell align="left" sx={{color:"greenyellow"}}>{data.status}....</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </Box>
  )
}

export default Dashboard