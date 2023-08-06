import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Collapse, Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type RowProps = {
  leakName: string;
  leakDetails: LeakDetails;
};

const Row: React.FC<RowProps> = ({ leakName, leakDetails }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{leakName}</TableCell>
        <TableCell>{leakDetails.last_breach || "-"}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Sources</TableCell>
                    <TableCell>Email Only</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Password</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{leakDetails.sources?.join(", ") || "-"}</TableCell>
                    <TableCell>{leakDetails.email_only?.toString() || "-"}</TableCell>
                    {leakDetails.line ? (
                      <>
                        <TableCell>{leakDetails.line.split(':')[0] || "-"}</TableCell>
                        <TableCell>{leakDetails.line.split(':')[1] || "-"}</TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                      </>
                    )}

                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

type LeaksTableProps = {
  leaks: Leaks;
};

const LeaksTable: React.FC<LeaksTableProps> = ({ leaks }) => {
  return (
    <Box sx={{ width: '100%', marginBottom: 3 }}>
      <Typography variant="h5" gutterBottom component="div" sx={{ flexGrow: 1, textAlign: 'center', m: 2 }}>
        Leaks Information
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Leak Name</TableCell>
              <TableCell>Last Breach</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(leaks).map(([leakName, leakDetails]) => (
              <Row key={leakName} leakName={leakName} leakDetails={leakDetails} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeaksTable;
