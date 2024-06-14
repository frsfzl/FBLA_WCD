/*
This is a React component for all of my citations for my images, videos, and source code
*/

export default function Documentation() {
  return (
    <div className="container-fluid p-0 bg-light pt-5 pb-5 ps-5 pe-5 border border-light">
      {/* Header */}
      <h1>Documentation</h1>
      {/* Citations for NavBar */}
      <h3 className="pt-4" style={{ fontSize: "24px" }}>
        Navigation Bar
      </h3>
      <p>
        <ul>
          <li>
            "Dark Mode SVG Vector." SVG Repo,
            https://www.svgrepo.com/svg/315691/dark-mode.
          </li>
        </ul>
      </p>
      {/* Citations for Homepage */}
      <h3 className="pt-3" style={{ fontSize: "24px" }}>
        Homepage
      </h3>
      <ul>
        <li>
          "video-1.mp4." GitHub, uploaded by briancodex. 10 Aug, 2020,
          https://github.com/briancodex/react-website-v1/blob/master/public/videos/video-1.mp4.
        </li>
        <li>
          fauxels. "Man Wearing White Long-sleeved Shirt Holding Black Pen."
          Pexels, 5 Nov, 2019,
          https://www.pexels.com/photo/man-wearing-white-long-sleeved-shirt-holding-black-pen-3182781/.
        </li>
        <li>
          Piacquadio, Andrea. "Depth of Field Photo of Man Sitting on Chair
          While Holding Cup in Front of Table." Pexels, 9 Mar, 2019,
          https://www.pexels.com/photo/depth-of-field-photo-of-man-sitting-on-chair-while-holding-cup-in-front-of-table-927451/.
        </li>
      </ul>
      {/* Citations for Careers page */}
      <h3 className="pt-3" style={{ fontSize: "24px" }}>
        Careers
      </h3>
      <ul>
        <li>
          "Blurry Footage Of uleople Inside A Office." Pexels, uploaded by Free
          Videos. 30 Mar, 2017,
          https://www.pexels.com/video/blurry-footage-of-people-inside-a-office-853844/.
        </li>
      </ul>
      {/* Citations for Benefits page */}
      <h3 className="pt-3" style={{ fontSize: "24px" }}>
        Benefits
      </h3>
      <ul>
        <li>
          "Haulpy People Working Together As A Team." Pexels, uploaded by
          fauxels. 18 Nov, 2019,
          https://www.pexels.com/video/happy-people-working-together-as-a-team-3249902/.
        </li>
      </ul>
      {/* Citations for tutorials I used to create the website */}
      <h3 className="pt-3" style={{ fontSize: "24px" }}>
        Tutorials
      </h3>
      <ul>
        <li>
          "React Tutorial for Beginners." YouTube, uploaded by Programming with
          Mosh, 12 Mar, 2023, https://www.youtube.com/watch?v=SqcY0GlETPk.
        </li>
        <li>
          "React Website Tutorial - Beginner React JS Project Fully Responsive."
          YouTube, uploaded by Brian Design, 11 Aug, 2020,
          https://www.youtube.com/watch?v=I2UBjN5ER4s.
        </li>
        <li>
          "Bootstrap 5 Crash Course." YouTube, uploaded by Web Dev Simplified,
          20 Aug, 2022, https://www.youtube.com/watch?v=Jyvffr3aCp0.
        </li>
        <li>
          "React Todo List App Tutorial - Beginner React JS Project Using
          Hooks." YouTube, uploaded by Brian Design, 23 Aug, 2020,
          https://www.youtube.com/watch?v=E1E08i2UJGI.
        </li>
        <li>
          "Learn Intersection Observer In 15 Minutes." YouTube, uploaded by Web
          Dev Simplified, 21 Dec, 2021,
          https://www.youtube.com/watch?v=2IbRtjez6ag.
        </li>
        <li>
          "Overlapping Layout With CSS Flex Box." YouTube, uploaded by WEB
          CIFAR, 26 Oct, 2020, https://www.youtube.com/watch?v=_HTL0XSMcRQ.
        </li>
        <li>
          "Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS)"
          YouTube, uploaded by freeCodeCamp.org, 24 Aug, 2022,
          https://www.youtube.com/watch?v=zJSY8tbf_ys.
        </li>
      </ul>
    </div>
  );
}
