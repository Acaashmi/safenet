import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { Heart } from "react-feather";
function Blog({
  name,
  username,
  date,
  year,
  location,
  information,
  likeCount,
}) {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <Card className="max-w-6xl bg-white bg-opacity-10 shadow-md rounded-2xl p-2">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar radius="full" size="lg" src="/images/wall.jpg"></Avatar>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="font-semibold leading-none text-zinc-200">{name}</h4>
            <h5 className="text-small tracking-tight text-zinc-400">
              @{username}
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : "bg-white bg-opacity-30 text-zinc-200 font-bold"
          }
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>

      <CardBody className="px-3 py-0 flex-row items-start gap-5">
        {/* Sidebar */}
        <div className="flex-0.5 text-white">
          <h1 className="font-bold text-2xl">
            {date}
            <br></br>
            {year}
          </h1>
          <p>{location}</p>
        </div>
        {/* Actual Content */}
        <div className="text-zinc-200">
          <p className="text-small max-w-3xl" dangerouslySetInnerHTML={{__html:information}}></p>

        </div>
      </CardBody>
      <CardFooter className="gap-3">
        <Button className="bg-opacity-10 flex align-center gap-2 text-zinc-200">
          <Heart size={20} />
          {likeCount}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Blog;
