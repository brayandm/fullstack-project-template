"use client";

import React from "react";

import { Typography } from "@mui/material";
import { get } from "@/lib/backendApi";
import useSWR from "swr";

const fetcher = (url: string) => get(url);
interface OverviewProps {}

function Overview({}: OverviewProps) {
  const { data, error, isLoading, mutate } = useSWR("/user", fetcher);

  return (
    <>
      {data && (
        <Typography
          variant="h2"
          sx={{ marginTop: "200px", marginLeft: "200px", textAlign: "center" }}
        >
          Welcome {data.data.name}
        </Typography>
      )}
    </>
  );
}

export default Overview;
