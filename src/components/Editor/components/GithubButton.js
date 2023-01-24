import { RiGithubLine } from 'react-icons/ri';

function GithubButton({ username }) {
  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="GithubButton Button alt"
      title="Check Out My GitHub"
    >
      <RiGithubLine />
      {username}
    </a>
  );
}

export default GithubButton;
