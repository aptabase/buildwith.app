import { App } from "..";
import icon from "./habitkit-icon.png";
import screenshot from "./habitkit-ss.png";
import SebastianRoehl from "./SebastianRoehl.jpg";

export const habitkit: App = {
  slug: "habitkit",
  name: "HabitKit",
  description: "Consistency Tracker",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "??? 2023",
  published_at: "April 2023",
  framework: "flutter",
  website: "https://www.habitkit.app/",
  stores: {
    google_play:
      "https://play.google.com/store/apps/details?id=com.roehl.habitkit",
    app_store:
      "https://apps.apple.com/us/app/habit-tracker-habitkit/id6443918070",
  },
  author: {
    name: "Sebastian Röhl",
    twitter: "SebastianRoehl",
    profile_img: SebastianRoehl.src,
  },
  interview: [
    {
      question: "Who is behind HabitKit? Tell us a little bit about yourself.",
      answer: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          convallis risus vel odio tristique, vel consequat neque consequat.
          Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce
          blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in
          sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius
          malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel
          nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor
          ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit
          amet tellus tristique pharetra sit amet quis nisi.
        </p>
      ),
    },
    {
      question:
        "Why did you build HabitKit? How did you come up with the idea?",
      answer: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          convallis risus vel odio tristique, vel consequat neque consequat.
          Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce
          blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in
          sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius
          malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel
          nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor
          ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit
          amet tellus tristique pharetra sit amet quis nisi.
        </p>
      ),
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever you want!",
      answer: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          convallis risus vel odio tristique, vel consequat neque consequat.
          Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce
          blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in
          sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius
          malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel
          nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor
          ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit
          amet tellus tristique pharetra sit amet quis nisi.
        </p>
      ),
    },
    {
      question: "Why Flutter? What made you choose it for your project?",
      answer: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          convallis risus vel odio tristique, vel consequat neque consequat.
          Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce
          blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in
          sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius
          malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel
          nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor
          ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit
          amet tellus tristique pharetra sit amet quis nisi.
        </p>
      ),
    },
    {
      question:
        "If you were to start again, would you choose a different framework?",
      answer: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          convallis risus vel odio tristique, vel consequat neque consequat.
          Nullam et sapien vel lorem congue sagittis eget id lorem. Fusce
          blandit, ipsum id congue pulvinar, leo lectus placerat nisi, in
          sagittis metus turpis nec mauris. Etiam viverra, enim sit amet varius
          malesuada, tortor dui convallis risus, nec lacinia risus ipsum vel
          nunc. Praesent lobortis vestibulum sapien, id ultricies nunc auctor
          ac. Nullam sed lorem vel metus dapibus bibendum. Nullam vel odio sit
          amet tellus tristique pharetra sit amet quis nisi.
        </p>
      ),
    },
  ],
};
