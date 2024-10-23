import { RepoInfo } from "@/models/types";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Link2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import UserContainer from "../containers/UserContainer";

interface IProfileProps {
  name: string;
  username: string;
  followers: number;
  followings: number;
  avatar: string;
  bio?: string;
  location?: string;
  website?: string | null;
  totalRepos: number;
  repos: RepoInfo[];
  page: number;
  handlePageChange: (event: unknown, newPage: number) => void;
}

const Profile: React.FC<IProfileProps> = ({
  name,
  username,
  followers,
  followings,
  avatar,
  bio,
  location,
  website,
  totalRepos,
  repos,
  page,
  handlePageChange,
}) => {
  return (
    <UserContainer>
      <Stack direction="row" gap="24px" alignItems="center">
        <Box sx={{ borderRadius: "50%", padding: 0, overflow: "hidden" }}>
          <Image src={avatar} width={150} height={150} alt="avatar" />
        </Box>

        <Stack>
          <Typography fontSize="32px" color="#2B3442">
            {name}
          </Typography>
          <Typography fontSize="14px" color="#0077ff">
            <Link href={`https://github.com/${username}`}>@{username}</Link>
          </Typography>
          {location ? (
            <Stack>
              <Typography fontSize="14px" color="#4B6A9B">
                {location}
              </Typography>
            </Stack>
          ) : (
            <Stack>
              <Typography fontSize="10px" color="grey">
                Usera&apos;s location is not provided!
              </Typography>
            </Stack>
          )}
          {website ? (
            <Stack>
              <Typography fontSize="14px" color="#4B6A9B">
                {website}
              </Typography>
            </Stack>
          ) : (
            <Stack>
              <Typography fontSize="10px" color="grey">
                User&apos;s website is not provided!
              </Typography>
            </Stack>
          )}
        </Stack>

        <Stack>
          <Typography color="#2B3442">Followers: {followers}</Typography>
          <Typography color="#2B3442">Following: {followings}</Typography>
        </Stack>
      </Stack>

      {bio ? (
        <Stack>
          <Typography fontSize="14px" color="#4B6A9B">
            {bio}
          </Typography>
        </Stack>
      ) : (
        <Stack>
          <Typography fontSize="10px" color="#grey">
            User`&apos;`s bio is not provided!
          </Typography>
        </Stack>
      )}

      {/* Repos */}
      <TableContainer component={Box} sx={{ width: "100%", padding: "16px" }}>
        <Table
          sx={{
            borderCollapse: "separate",
            borderSpacing: "0 16px",
          }}
          aria-label="repos table"
        >
          <TableHead
            sx={{
              border: "none",
              color: "#878787",
              fontSize: "24px",
              padding: "16px",
            }}
          >
            Repos
          </TableHead>
          <TableBody
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
            }}
          >
            {repos.map((repo) => (
              <TableRow
                key={repo.id}
                sx={{
                  borderRadius: "12px",
                  outline: "1px solid #F3F7FE",
                  display: "flex",
                  flexDirection: "column",

                  "&:last-child td, &:last-child th": { border: 0 },
                  "& > *": {
                    padding: "12px",
                  },
                }}
              >
                <TableCell component="th" scope="row" sx={{ border: "none" }}>
                  {repo.id}
                </TableCell>
                <TableCell sx={{ border: "none" }}>{repo.name}</TableCell>
                <TableCell sx={{ border: "none" }}>
                  <Link href={repo.url} color="#0077FF">
                    <Link2 />
                  </Link>
                </TableCell>
                <TableCell sx={{ color: "#4B6A9B", border: "none" }}>
                  {repo.language}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={totalRepos}
          rowsPerPage={10}
          page={page - 1}
          onPageChange={handlePageChange}
          rowsPerPageOptions={[]}
          showLastButton
          showFirstButton
        />
      </TableContainer>
    </UserContainer>
  );
};

export default Profile;
