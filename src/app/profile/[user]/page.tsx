"use client";

import Message from "@/components/Message/Message";
import Profile from "@/components/Profile/Profile";
import { useRepos, useSearch } from "@/hooks/useSearch";
import { Skeleton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IUserProps {
  params: {
    user: string;
  };
}

const User: React.FC<IUserProps> = ({ params }) => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError, error } = useSearch(params.user);
  const {
    data: reposData,
    isLoading: reposIsLoading,
    isError: reposIsError,
    error: reposError,
  } = useRepos(params.user, page);
  const router = useRouter();

  const handlePageChange = (event: unknown, page: number) => {
    setPage(page + 1);
  };

  if ((isLoading && !data) || (reposIsLoading && !reposData))
    return (
      <Skeleton
        variant="rectangular"
        height="90vh"
        width="600px"
        animation="wave"
      />
    );

  if (isError && reposIsError)
    return (
      <>
        <Typography>{error.message}</Typography>
        <Typography>{reposError.message}</Typography>
      </>
    );

  if (!data || !reposData.length) {
    setTimeout(() => {
      router.push("/")
    }, 2000);

    return <Message />;
  }

  return (
    
      <Profile
        name={data.name}
        username={data.login}
        avatar={data.avatar_url}
        followers={data.followers}
        followings={data.following}
        bio={data.bio}
        location={data.location}
        website={data.company}
        totalRepos={data.public_repos}
        page={page}
        handlePageChange={handlePageChange}
        repos={reposData}
      />
  );
};

export default User;
