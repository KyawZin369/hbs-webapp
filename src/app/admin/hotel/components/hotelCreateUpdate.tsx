import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Editor } from "@tinymce/tinymce-react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// Define the form data structure using TypeScript interface
interface HotelFormInputs {
  hotelName: string;
  hotelLocation: string;
  phoneNumber: string;
  department?: string;
  hotelImages: FileList | null;
  description: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

interface propsType {
  handleClose: () => void
}

const HotelCreateUpdate = ({handleClose} : propsType) => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm<HotelFormInputs>({
    defaultValues: {
      hotelName: "",
      hotelLocation: "",
      phoneNumber: "",
      department: "",
      hotelImages: null,
      description: "",
    },
  });

  const onSubmit: SubmitHandler<HotelFormInputs> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <StyledPaper>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "90vh",
          maxWidth: "100vh",
        }}
      >
        <Typography variant="h5" component="div" align="center" gutterBottom>
          Create Hotel
        </Typography>

        <Divider sx={{ mb: 1 }} />

        <Box sx={{ overflow: "auto"}}>
          <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="hotelName"
                control={control}
                rules={{ required: "Hotel Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Hotel Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.hotelName}
                    helperText={errors.hotelName?.message}
                    InputProps={{
                      style: {
                        height: "40px",
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        top: "-5px",
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="hotelLocation"
                control={control}
                rules={{ required: "Hotel Location is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Hotel Location"
                    variant="outlined"
                    fullWidth
                    error={!!errors.hotelLocation}
                    helperText={errors.hotelLocation?.message}
                    InputProps={{
                      style: {
                        height: "40px",
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        top: "-5px",
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{9,12}$/,
                    message: "Enter a valid phone number (9-12 digits)",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                    InputProps={{
                      style: {
                        height: "40px",
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        top: "-5px",
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="department"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Department"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: {
                        height: "40px",
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        top: "-5px",
                      },
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, marginBottom: "20px"}}>
            <Typography variant="subtitle1">Hotel Images:</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <input
                {...register("hotelImages")}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="hotel-images-upload"
              />
              <label htmlFor="hotel-images-upload">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<AttachFileIcon />}
                >
                  Upload Images
                </Button>
              </label>
              <Typography variant="body2" color="textSecondary">
                Drag & Drop files here or click to browse
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Description:
            </Typography>
            <Controller
              name="description"
              control={control}
              render={() => (
                <Editor
                  apiKey="ymm6853doi36vdqhd43f1cltcny4qaduqdjewva00wo73p2e"
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: ["lists link image paste help wordcount"],
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
                  }}
                  onEditorChange={(content) => setValue("description", content)}
                />
              )}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button variant="outlined" color="error" type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Box>
      </Box>
    </StyledPaper>
  );
};

export default HotelCreateUpdate;
