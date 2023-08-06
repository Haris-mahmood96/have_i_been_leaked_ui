import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse, Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.domain}</TableCell>
        <TableCell>{row.method}</TableCell>
        <TableCell>{row.exists ? "Yes" : "No"}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="details">
                <TableHead>
                  <TableRow>
                    <TableCell>Email Recovery</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Others</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{row.emailrecovery || "-"}</TableCell>
                    <TableCell>{row.phoneNumber || "-"}</TableCell>
                    <TableCell>{row.others ? JSON.stringify(row.others) : "-"}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function SocailMediaRegistrationsCollapsibleTable(props) {
  const { data } = props;

  return (
    <Box sx={{ width: '100%', marginBottom: 3 }}>
      <Typography variant="h5" gutterBottom component="div" sx={{ flexGrow: 1, textAlign: 'center', m: 2 }}>
      Social Media Registrations
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Domain</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Exists</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
