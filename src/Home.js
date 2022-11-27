import "./Home.css"

function Home(){
    return (
      <div id="main">
        <table id='list-lagu' class="col-9 col-s-7">
            <tr>
                <th>#</th>
                <th colspan="2" >JUDUL</th>
                <th>TAHUN TERBIT</th>
                <th>GENRE</th>
                <th>DURASI</th>
            </tr>
            <tr class="list-lagu-item">
                <td class="nomertabel">1</td>
                <td>
                    <a class="tabel-lagu-img" href="/">
                        <img id ="logo" src="/img/cover-album.png"></img>
                    </a>
                </td>
                <td class="container">
                    <div class="judul-lagu"><a href="/">ini judul bos</a></div>
                    <div class="penyanyi">ini penyanyi</div>
                </td>
                <td class="tahun-terbit">2002</td>
                <td class="genre">dangdut</td>
                <td class="nomertabel">2</td>
            </tr>
            <tr class="list-lagu-item">
                <td class="nomertabel">1</td>
                <td>
                    <a class="tabel-lagu-img" href="/">
                        <img id ="logo" src="/img/cover-album.png"></img>
                    </a>
                </td>
                <td class="container">
                    <div class="judul-lagu"><a href="/">ini judul bos</a></div>
                    <div class="penyanyi">ini penyanyi</div>
                </td>
                <td class="tahun-terbit">2002</td>
                <td class="genre">dangdut</td>
                <td class="nomertabel">2</td>
            </tr>
            <tr class="list-lagu-item">
                <td class="nomertabel">1</td>
                <td>
                    <a class="tabel-lagu-img" href="/">
                        <img id ="logo" src="/img/cover-album.png"></img>
                    </a>
                </td>
                <td class="container">
                    <div class="judul-lagu"><a href="/">ini judul bos</a></div>
                    <div class="penyanyi">ini penyanyi</div>
                </td>
                <td class="tahun-terbit">2002</td>
                <td class="genre">dangdut</td>
                <td class="nomertabel">2</td>
            </tr>
        </table>
      </div>
    )
}

export default Home