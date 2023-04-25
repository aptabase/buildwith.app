import { App } from "..";
import icon from "./aptakube-icon.png";
import screenshot from "./aptakube-ss.webp";

export const aptakube: App = {
  slug: "aptakube",
  name: "Aptakube",
  description:
    "Modern, lightweight and multi-cluster Kubernetes desktop client",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  framework: "tauri",
  website: "https://aptakube.com",
  author: {
    name: "Guilherme Oenning",
    twitter: "goenning",
  },
  interview: [
    {
      question:
        "How is behind Aptakube? Could you tell us a little bit about yourself?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis risus vel odio tristique, vel consequat neque consequat. Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit amet tellus tristique pharetra sit amet quis nisi.",
    },
    {
      question:
        "Why did you build Aptakube? How did you come up with the idea?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis risus vel odio tristique, vel consequat neque consequat. Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit amet tellus tristique pharetra sit amet quis nisi.",
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever you want!",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis risus vel odio tristique, vel consequat neque consequat. Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit amet tellus tristique pharetra sit amet quis nisi.",
    },
    {
      question: "Why Tauri? What made you choose it for your project?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis risus vel odio tristique, vel consequat neque consequat. Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit amet tellus tristique pharetra sit amet quis nisi.",
    },
    {
      question:
        "If you were to start again, would you choose a different framework?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis risus vel odio tristique, vel consequat neque consequat. Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit amet tellus tristique pharetra sit amet quis nisi.",
    },
  ],
};
