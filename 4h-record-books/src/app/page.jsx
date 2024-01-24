function Card(props) {
  return (
      <div className="card">
          {props.children}
      </div>
  )
}

export default function Home() {
  return (
    <main>
      <h1><b>Home</b></h1>
      <div className="card-grid">

        <Card>
          <div className="e-card-img">
            <img src="https://yt3.googleusercontent.com/7jw2dHehoxZZWyHI5FqQr7KMJSzdTBfzuJomE-BmXLKQeBeFGTpv4kYCsc2IeQeaHt1X33yZQg=s900-c-k-c0x00ffffff-no-rj" />
          </div>
          <div className="e-card-content">
            <a href="https://extension.oregonstate.edu/4h">4-H Youth Development</a>
          </div>
        </Card>

        <Card>
            <div className="e-card-img">
              <img src="https://extension.oregonstate.edu/sites/default/files/styles/full/public/images/2018-10/20180706120533.jpg?itok=QJ6NuphZ"></img>
            </div>
          <div className="e-card-content">
            <a href="https://extension.oregonstate.edu/program/all/4h/events">Events</a>
          </div>
        </Card>

        <Card>
          <div className="e-card-img">
            <img src="https://www.4-h.org/wp-content/uploads/2022/11/07104850/E_-Branded-element-1.png"></img>
          </div>
          <div className="e-card-content">
            <a href="https://extension.oregonstate.edu/program/all/4h/local-programs">Local 4-H Program Finder</a>
          </div>
        </Card>

        <Card>
          <div className="e-card-img">
            <img src="https://4-h.org/wp-content/uploads/2023/02/02104805/323-cutout.jpg"></img>
          </div>
          <div className="e-card-content">
            <a href="https://extension.oregonstate.edu/4h/about-4-h">About 4-H</a>
          </div>
        </Card>

        <Card>
          <div className="e-card-img">
            <img src="https://extension.oregonstate.edu/sites/default/files/styles/full/public/images/2022-08/group-welcome-2.jpg?itok=1eoDV0NG"></img>
          </div>
          <div className="e-card-content">
            <a href="https://extension.oregonstate.edu/4h/4-h-summer-camps">4-H Summer Camps</a>
          </div>
        </Card>

        <Card>
          <div className="e-card-img">
            <img src="https://extension.oregonstate.edu/sites/default/files/styles/full/public/images/2018-10/recordbook.jpg?itok=N5ojWdV5"></img>
          </div>
          <div className="e-card-content">
            <a href="https://extension.oregonstate.edu/4h/4-h-projects">4-H Projects</a>
          </div>
        </Card>

        <Card>
          <div className="e-card-img">
            <img src="https://extension.oregonstate.edu/sites/default/files/styles/full/public/images/2021-08/volunteer-b.png?itok=FBN8rSHC"></img>
          </div>
          <div className="e-card-content">
            <a href="https://extension.oregonstate.edu/4h/volunteer-resources-0">Volunteer Resources</a>
          </div>
        </Card>

        <Card>
          <div className="e-card-img">
            <img src="https://extension.oregonstate.edu/sites/default/files/styles/full/public/images/2021-07/4h-org4htexaseditshires-6220v2.jpg?itok=Q6bFQ3iN"></img>
          </div>
          <div className="e-card-content">
            <a href="https://extension.oregonstate.edu/4h/support-4-h">Support 4-H</a>
          </div>
        </Card>

      </div>
    </main>
  )
}
