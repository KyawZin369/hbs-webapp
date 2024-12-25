import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Editor } from "@tinymce/tinymce-react";

// Define the form data structure using TypeScript interface
interface HotelFormInputs {
  hotelName: string;
  hotelLocation: string;
  phoneNumber: string;
  department?: string;
  hotelImages: FileList | null;
  description: string;
}

const HotelCreateUpdate: React.FC = () => {
  // Initialize react-hook-form with TypeScript generics
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

  // Form submission handler
  const onSubmit: SubmitHandler<HotelFormInputs> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: 500,
        margin: "auto",
        padding: 3,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h6" component="div" align="center">
        Create Hotel
      </Typography>

      {/* Hotel Name Field */}
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
          />
        )}
      />

      {/* Hotel Location Field */}
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
          />
        )}
      />

      {/* Phone Number Field */}
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
          />
        )}
      />

      {/* Department Field (Optional) */}
      <Controller
        name="department"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Department"
            variant="outlined"
            fullWidth
          />
        )}
      />

      {/* Hotel Images Upload */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
        <Typography>Drag & Drop files here or click to browse</Typography>
      </Box>

      {/* Description Editor */}
      <Typography>Description:</Typography>
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

      {/* Form Actions */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="outlined" color="error" type="button">
          Cancel
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default HotelCreateUpdate;
