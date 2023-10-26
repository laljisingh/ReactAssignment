import "./main.css";
import 'font-awesome/css/font-awesome.min.css';
function Main() {
  return (
    <div className="main-div">
      {/* left part design */}
      <div className="left-part">
        <div className="link1">
          <img src="https://blog.logrocket.com/wp-content/uploads/2021/01/react-native-geolocation.png"></img>
          <p>React 1</p>
        </div>
        <div className="link1">
          <img src="https://static.frontendmasters.com/assets/courses/2023-01-23-react-performance/thumb.webp"></img>
          <p>React 2</p>
        </div>
        <div className="link1">
          <img src="https://blog.logrocket.com/wp-content/uploads/2021/04/getting-started-with-create-react-app.png"></img>
          <p>React 3</p>
        </div>
        <div className="link1">
          <img src="https://blog.logrocket.com/wp-content/uploads/2021/09/react-native-component-libraries.png"></img>
          <p>React 4</p>
        </div>
      </div>
      {/* rght side desing */}
      <div className="right-part">
        <div className="div1 div11">
          <div className="part1">
            <h1>Hi Lal Ji Singh</h1>
            <p>Freelancer opportunity</p>
          </div>
          <div className="part2">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="div1 div12">
          <table className='skills'>
            <tr>
              <td>Present</td>
              <td>
                <th>Fresher </th>
                <th> <i className="fa fa-star"> Learning with geekster</i></th>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='overViewData'>
                it was a software where user can learn something and earn
                something
              </td>
            </tr>
            <tr>
              <td>2016</td>
              <td>
                <th>microsoft 1</th>
                <th><i className="fa fa-star"> Learning with geekster</i></th>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='overViewData'>
                it was a software where user can learn something and earn
                something
              </td>
            </tr>
            <tr>
              <td>2013-2015</td>
              <td>
                <th>Fresher</th>
                <th><i className="fa fa-star"> Learning with geekster</i></th>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='overViewData'>i am also know the concept of react basics and we can design a good web pages</td>
            </tr>
          </table>
        </div>
        <div className="div1 div13">
          <div className="part1">
            <table>
              <tr>
                <td>Writing
                </td>
                <td className='star'>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                 
                </td>
              </tr>
              <tr>
                <td>Edinting</td>
                <td className='star'>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </td>
              </tr>
              <tr>
                <td>Lisening</td>
                <td className='star'>
                <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </td>
              </tr>
              <tr>
                <td>Speeking</td>
                <td  className='star'>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </td>
              </tr>
              <tr>
                <td>Social Media</td>
                <td className='star'>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </td>
              </tr>
            </table>
          </div>
          <div className="part2">
            <table>
              {/* first */}
              <tr>
                <th>Zapier</th>
                <td>
                  <tr>
                    <td>I am not a just fresher , i have some knowledge of programming</td>
                  </tr>
                  <tr>
                    <td>I am not a just fresher , i have some knowledge of programming</td>
                  </tr>
                </td>
              </tr>
              {/* second */}
              <tr>
                <th>Zapier</th>
                <td>
                  <tr>
                    <td>I am not a just fresher , i have some knowledge of programming</td>
                  </tr>
                  <tr>
                    <td>I am not a just fresher , i have some knowledge of programming</td>
                  </tr>
                </td>
              </tr>
              {/* third */}
              <tr>
                <th>Zapier</th>
                <td>
                  <tr>
                    <td>I am not a just fresher , i have some knowledge of programming</td>
                  </tr>
                  <tr>
                    <td>I am not a just fresher , i have some knowledge of programming</td>
                  </tr>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="div1 div14">
          <div className="link1">
            <img src="https://blog.logrocket.com/wp-content/uploads/2021/01/react-native-geolocation.png"></img>
            <p>React 1</p>
          </div>
          <div className="link1">
            <img src="https://static.frontendmasters.com/assets/courses/2023-01-23-react-performance/thumb.webp"></img>
            <p>React 2</p>
          </div>
          <div className="link1">
            <img src="https://blog.logrocket.com/wp-content/uploads/2021/04/getting-started-with-create-react-app.png"></img>
            <p>React 3</p>
          </div>
          <div className="link1">
            <img src="https://blog.logrocket.com/wp-content/uploads/2021/09/react-native-component-libraries.png"></img>
            <p>React 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
