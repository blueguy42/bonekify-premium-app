import "./Subscription.css"

function Subscription(){
  return(
    <div id="main">
        <table id='list-lagu' class="col-9 col-s-7">
            <tr>
                <th>#</th>
                <th>USERNAME</th>
                <th>PENYANYI</th>
                <th colspan="2">AKSI</th>
            </tr>
            <tr class="list-lagu-item">
                <td class="nomertabel">1</td>
                <td>
                    ini user mau subscribe
                </td>
                <td class="container">
                    ini penyanyi
                </td>
                <td>
                    <button type="submit">TERIMA</button>
                </td>
                <td>
                    <button type="submit">TOLAK</button>
                </td>
            </tr>
            <tr class="list-lagu-item">
                <td class="nomertabel">1</td>
                <td>
                    ini user mau subscribe
                </td>
                <td class="container">
                    ini penyanyi
                </td>
                <td>
                    <button type="submit">TERIMA</button>
                </td>
                <td>
                    <button type="submit">TOLAK</button>
                </td>
            </tr>
            <tr class="list-lagu-item">
                <td class="nomertabel">1</td>
                <td>
                    ini user mau subscribe
                </td>
                <td class="container">
                    ini penyanyi
                </td>
                <td>
                    <button type="submit">TERIMA</button>
                </td>
                <td>
                    <button type="submit">TOLAK</button>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Subscription