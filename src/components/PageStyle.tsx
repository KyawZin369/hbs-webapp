"use client";

import {
  Box,
  Button,
  Modal,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";

interface PageStyleProps {
  pageName: string;
  searchTitle: string;
  searchFilterForm: JSX.Element | null;
  formTypeTitle?: string;
  createdForm: JSX.Element | null;
  children: React.ReactNode;
  pageCount: number;
  formtypeBoolean?: boolean;
  setOpenModal: (type: "search" | "form" | null) => void;
  setCloseModal: () => void;
  openModal: "search" | "form" | null;
}

export default function PageStyle({
  pageName,
  searchTitle,
  searchFilterForm,
  formTypeTitle,
  createdForm,
  children,
  pageCount,
  formtypeBoolean,
  setOpenModal,
  openModal,
  setCloseModal
}: PageStyleProps) {

  const formTypeOptions = formtypeBoolean;



  return (
    <Stack
      spacing={3}
      sx={{
        width: "90%",
        height: "80%",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        marginLeft: "10px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography marginLeft={3} variant="h4" fontWeight="bold">
            {pageName}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpenModal("search")}
            >
              {searchTitle}
            </Button>
            <Modal
              aria-labelledby="search-modal-title"
              aria-describedby="search-modal-description"
              open={openModal === "search"}
              onClose={setCloseModal}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>{searchFilterForm}</Box>
            </Modal>
          </Box>

          {formTypeOptions && (
            <Box>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpenModal("form")}
              >
                {formTypeTitle}
              </Button>
              <Modal
                aria-labelledby="form-modal-title"
                aria-describedby="form-modal-description"
                open={openModal === "form"}
                onClose={setCloseModal}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>{createdForm}</Box>
              </Modal>
            </Box>
          )}
        </Box>
      </Stack>
      <Stack>
        <Box>{children}</Box>
        <Pagination count={pageCount} shape="rounded" />
      </Stack>
    </Stack>
  );
}
