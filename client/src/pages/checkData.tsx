import React from 'react';
import { Container, Typography } from '@mui/material';
import UpdateDataset from '../components/updateDataset';

const CheckData: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        데이터셋 검수
      </Typography>
      <UpdateDataset />
    </Container>
  );
};

export default CheckData;
