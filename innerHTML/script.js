const header = document.getElementsByTagName("header")[0]
header.innerHTML = `
<div
        style="display: flex; justify-content: space-around;background-color:#BB4739; align-items: center;height:80px">
            <div class="logo">
              <a href="">
                <img src="https://logos-world.net/wp-content/uploads/2022/04/BMW-M-Logo.png"
                style="height:50px " alt=""></a>
            </div>
            <ul style="display: flex; gap: 20px; list-style: none;">
                <li><a style="color: white;text-decoration: none;" href="">Home</a></li>
                <li><a style="color: white;text-decoration: none;" href="">Contact</a></li>
                <li><a style="color: white;text-decoration: none;" href="">About</a></li>
                <li><a style="color: white;text-decoration: none;" href="">Blog</a></li>
                <li><a style="color: white;text-decoration: none;" href="">Service</a></li>
            </ul>
</div>
 
`