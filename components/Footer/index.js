import Link from "next/link";
import Icon from "@components/Icon";
import * as Styles from "./styles";

export default function Footer() {
  const social = [
    {
      channel: "youtube",
      url: "#0",
      name: "YouTube",
    },
    {
      channel: "twitter",
      url: "#0",
      name: "Twitter",
    },
    {
      channel: "facebook",
      url: "#0",
      name: "Facebook",
    },
    {
      channel: "spotify",
      url: "#0",
      name: "Spotify",
    },
    {
      channel: "apple",
      url: "#0",
      name: "Apple Podcasts",
    },
    {
      channel: "google",
      url: "#0",
      name: "Google Podcasts",
    },
    {
      channel: "rss",
      url: "#0",
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
