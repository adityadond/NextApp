import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  console.log(name);
  return (<p>Welcome {name}</p>);
};

export default Name;
