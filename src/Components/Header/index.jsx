export const Header = () => {
    return (
        <header className="ly_header"> 
          <div className="ly_header_inner" >
            <div class="bl_headerUtils">
              <a class="bl_headerUtils_logo" href="#">StoneAgeTools<img src="/assets/img/logo.svg" alt=""/></a>
              <a class="el_btn" href="#">Download Script</a>
            </div>
            {/* /.bl_headerUtils */}
            <nav>
              <ul class="bl_headerNav">
                <li class="bl_headerNav_item">
                  <a class="bl_headerNav_link" href="#">Info</a>
                </li>
                <li class="bl_headerNav_item">
                  <a class="bl_headerNav_link" href="#">Network</a>
                </li>
                <li class="bl_headerNav_item">
                  <a class="bl_headerNav_link" href="#">A</a>
                </li>
                <li class="bl_headerNav_item">
                  <a class="bl_headerNav_link" href="#">B</a>
                </li>
                <li class="bl_headerNav_item">
                  <a class="bl_headerNav_link" href="#">C</a>
                </li>
                <li class="bl_headerNav_item">
                  <a class="bl_headerNav_link" href="#">D</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* /.ly_header_inner */}
        </header>
    );
  }
  
 // export Header;
  