import Link from "next/link";
import Icon from "@components/Icon";
import * as Styles from "./styles";

export default function Footer() {
  const social = [
    {
      channel: "youtube",
      url: "https://www.youtube.com/channel/UC-M0MHRa0CNewKhjCz4c2Qg",
      name: "YouTube",
    },
    {
      channel: "twitter",
      url: "https://twitter.com/IstoVai",
      name: "Twitter",
    },
    {
      channel: "instagram",
      url: "https://instagram.com/isto.vai",
      name: "Instagram",
    },
    {
      channel: "facebook",
      url: "https://www.facebook.com/WorldFailurists",
      name: "Facebook",
    },
    {
      channel: "spotify",
      url: "https://open.spotify.com/show/6R6RisJT1Ogk2zc67j7MMc",
      name: "Spotify",
    },
    {
      channel: "apple",
      url: "https://podcasts.apple.com/pt/podcast/isto-vai/id1549116254",
      name: "Apple Podcasts",
    },
    {
      channel: "google",
      url: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80N2MzNTBhNC9wb2RjYXN0L3Jzcw==",
      name: "Google Podcasts",
    },
    {
      channel: "rss",
      url: "https://anchor.fm/s/47c350a4/podcast/rss",
      name: "RSS",
    },
  ];

  const contacts = [
    {
      url: "mailto:istovaidarmerda.online@gmail.com",
      value: "Email",
    },
    {
      url: "https://twitter.com/SoniaTelesF",
      value: "@SoniaTelesF",
    },
  ];

  return (
    <Styles.Wrapper>
      <div className="social">
        <ul>
          {social.map((item, index) => (
            <li key={index}>
              <Link href={item.url} passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <Icon icon={item.channel} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {contacts.map((item, index) => (
            <li key={index}>
              <Link href={item.url} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Styles.Wrapper>
  );
}
