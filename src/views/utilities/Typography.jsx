import React, { useState } from 'react';
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Grid,
} from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
  const [formValues, setFormValues] = useState({
    namaUsaha: '',
    jenisUsaha: '',
    namaPemilik: '',
    NIK: '',
    tanggalLahir: '',
    kelamin: '',
    NPWP: '',
    nomorHP: '',
    alamat: '',
    alamatUsaha: '',
    statusUsaha: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log(formValues);
  };

  return (
    <MainCard title="Formulir Input Order" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nama Usaha"
                  name="namaUsaha"
                  value={formValues.namaUsaha}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Jenis Usaha"
                  name="jenisUsaha"
                  value={formValues.jenisUsaha}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nama Pemilik"
                  name="namaPemilik"
                  value={formValues.namaPemilik}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="NIK"
                  name="NIK"
                  value={formValues.NIK}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tanggal Lahir"
                  name="tanggalLahir"
                  value={formValues.tanggalLahir}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Kelamin</InputLabel>
                  <Select
                    name="kelamin"
                    value={formValues.kelamin}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Laki-laki">Laki-laki</MenuItem>
                    <MenuItem value="Perempuan">Perempuan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="NPWP"
                  name="NPWP"
                  value={formValues.NPWP}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nomor HP"
                  name="nomorHP"
                  value={formValues.nomorHP}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Alamat"
                  name="alamat"
                  value={formValues.alamat}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Alamat Usaha"
                  name="alamatUsaha"
                  value={formValues.alamatUsaha}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Status Usaha"
                  name="statusUsaha"
                  value={formValues.statusUsaha}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Typography;