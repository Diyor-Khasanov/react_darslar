import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Pagination,
  CircularProgress,
} from "@mui/material";

const categories = [
  "Home",
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const dummyData = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  category: ["Science", "Innovation", "Industry"][i % 3],
  title:
    "Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock",
  author: "Floyd Miles",
  date: "3 Days Ago",
}));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [page]);

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ gap: 2, flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <Button key={cat} color="inherit" size="small">
              {cat}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3, maxWidth: 1000, mx: "auto" }}>
        <TextField
          fullWidth
          placeholder="Searching..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 4 }}
        />

        {loading ? (
          <Box display="flex" justifyContent="center" my={10}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {data.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 140, backgroundColor: "#ccc" }}
                      image=""
                      title={item.title}
                    />
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        left: 8,
                        backgroundColor:
                          item.category === "Science"
                            ? "#2196f3"
                            : item.category === "Innovation"
                            ? "#03a9f4"
                            : "#9e9e9e",
                        color: "#fff",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.author} &nbsp;&nbsp; {item.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        <Box mt={6} display="flex" justifyContent="center">
          <Pagination
            count={5}
            page={page}
            onChange={(e, val) => setPage(val)}
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
