"use client";

import { LoginUser, registerUser } from "@/API/userApi";
import colors from "@/style/configStyle";
import { userRegisterandLoginType } from "@/type/account";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

interface formProp {
  action: string | undefined;
  handleCloseModal: () => void;
}

export function Form({ action, handleCloseModal }: formProp) {

  const mutation = useMutation((userData: userRegisterandLoginType) =>
    action === "register" ? registerUser(userData) : LoginUser(userData)
  );

  const { control, handleSubmit } = useForm<userRegisterandLoginType>({
    defaultValues:
      action == "register"
        ? {
            name: "",
            email: "",
            country: "",
            password: "",
            phone_number: "",
            address: "",
          }
        : {
            name: "",
            email: "",
            password: "",
          },
  });

  const OnSubmit: SubmitHandler<userRegisterandLoginType> = async (
    FormData
  ) => {
    mutation.mutate(FormData, {
      onSuccess : (data) => {
        console.log(data)
        handleCloseModal();
      },
      onError : (err) => {
        console.log(err)
      }
    })
  };

  return (
    <Stack
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        action=""
        onSubmit={handleSubmit(OnSubmit)}
        style={{
          backgroundColor: colors.whiteColor,
          width: action == "register" ? "800px" : "400px",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          component="h3"
          fontSize="20px"
          fontWeight={800}
          textAlign="center"
          paddingTop="30px"
        >
          {action == "register" ? "Create Your Account" : "Login Account"}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          padding="30px"
          width="100%"
        >
          <Box marginRight={2}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="password"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
              )}
            />
          </Box>
          {action == "register" && (
            <Box marginLeft={2}>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="country"
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                  />
                )}
              />
              <Controller
                name="phone_number"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone No."
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                  />
                )}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="address"
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                  />
                )}
              />
            </Box>
          )}
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: colors.secondaryColor, marginBottom: "20px", marginRight: "10px" }}
          >
            {action == "register" ? "Create" : "Login"}
          </Button>
          <Button
            variant="contained"
            onClick={()=>handleCloseModal()}
            sx={{ bgcolor: colors.secondaryColor, marginBottom: "20px", marginLeft: "10px" }}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Stack>
  );
}
