import { ServicesOptions } from "~~/interfaces/services-options";

export default function () {
  const selectedPost = useState<ServicesOptions>("selectedPost");

  const setSelectedPost = (value: any) => {
    selectedPost.value = value;
  };

  return {
    selectedPost,
    setSelectedPost,
  };
}
