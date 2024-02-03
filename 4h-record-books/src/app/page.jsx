import Link from 'next/link'

function Card(props) {
  var title = props.title;
  var url = props.url;

  return (
    <Link href={url} className="summary-card-item" rel="noopener noreferrer" target="_blank">
      <div className="card-text">{title}</div>
    </Link>
  )
}

export default function Home() {
  return (
    <main>
      <h1><b>Home</b></h1>
      <div className="summary-card">
        <Card title="4-H Youth Development" url="https://extension.oregonstate.edu/4h" />
        <Card title="Events" url="https://extension.oregonstate.edu/program/all/4h/events" />
        <Card title="Local 4-H Program Finder" url="https://extension.oregonstate.edu/program/all/4h/local-programs" />
        <Card title="About 4-H" url="https://extension.oregonstate.edu/4h/about-4-h" />
        <Card title="4-H Summer Camps" url="https://extension.oregonstate.edu/4h/4-h-summer-camps" />
        <Card title="4-H Projects" url="https://extension.oregonstate.edu/4h/4-h-projects" />
        <Card title="Volunteer Resources" url="https://extension.oregonstate.edu/4h/volunteer-resources-0" />
        <Card title="Support 4-H" url="https://extension.oregonstate.edu/4h/support-4-h" />
      </div>
    </main>
  )
}