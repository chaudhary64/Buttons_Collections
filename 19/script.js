let btn = document.querySelectorAll(".btn");
btn.forEach(btn => {
    btn.onclick = function (e) {
        // '𝔢.𝔱𝔞𝔯𝔤𝔢𝔱.𝔬𝔣𝔣𝔰𝔢𝔱𝔏𝔢𝔣𝔱' 𝔞𝔫𝔡 '𝔢.𝔱𝔞𝔤𝔢𝔱.𝔬𝔣𝔣𝔰𝔢𝔱𝔗𝔬𝔭'𝔯𝔢𝔭𝔯𝔢𝔰𝔢𝔫𝔱𝔰 𝔱𝔥𝔢 𝖍𝖔𝖗𝖎𝖟𝖔𝖓𝖙𝖆𝖑/𝖛𝖊𝖗𝖙𝖎𝖈𝖆𝖑 𝖉𝖎𝖘𝖙𝖆𝖓𝖈𝖊 (𝖎𝖓 𝖕𝖎𝖝𝖊𝖑𝖘) 𝖇𝖊𝖙𝖜𝖊𝖊𝖓 𝖙𝖍𝖊 𝖑𝖊𝖋𝖙/𝖙𝖔𝖕 𝖊𝖉𝖌𝖊 𝖔𝖋 𝖙𝖍𝖊 𝖙𝖆𝖗𝖌𝖊𝖙 𝖊𝖑𝖊𝖒𝖊𝖓𝖙 𝖆𝖓𝖉 𝖙𝖍𝖊 𝖑𝖊𝖋𝖙/𝖙𝖔𝖕 𝖊𝖉𝖌𝖊 𝔬𝔣 𝔦𝔱𝔰 𝔬𝔣𝔣𝔰𝔢𝔱 𝔭𝔞𝔯𝔢𝔫𝔱 (𝔱𝔥𝔢 𝔫𝔢𝔞𝔯𝔢𝔰𝔱 𝔭𝔬𝔰𝔦𝔱𝔦𝔬𝔫𝔢𝔡 𝔞𝔫𝔠𝔢𝔰𝔱𝔬𝔯) . If the button itself has a positioned ancestor (e.g., a parent element with position: relative), the values of offsetLeft and offsetTop would be relative to that positioned ancestor. If the button itself has no positioned ancestor, the values of offsetLeft and offsetTop would be relative to the document body.
        //-----------------------------------------------------------------------------------------------------------------------------------------
        // For example, consider the following HTML structure:
        // <div style="position: relative;">
        //  <button class="btn">Click me</button>
        // </div>
        // If the button is clicked, and it's inside a div with a relative position, then e.target.offsetLeft and e.target.offsetTop would be relative to the top-left corner of that div
        // ----------------------------------------------------------------------------------------------------------------------------------------
        // So, the offsetLeft and offsetTop values are calculated relative to the nearest positioned ancestor of the button. If there isn't a positioned ancestor, these values will be relative to the document. If there are multiple ancestors with positioning, the values will be relative to the closest one.
        //-----------------------------------------------------------------------------------------------------------------------------------------
        // '𝖊.𝖕𝖆𝖌𝖊𝖃' 𝖆𝖓𝖉 '𝖊.𝖕𝖆𝖌𝖊𝖄' 𝖗𝖊𝖕𝖗𝖊𝖘𝖊𝖓𝖙𝖘 𝖙𝖍𝖊 𝖍𝖔𝖗𝖎𝖟𝖔𝖓𝖙𝖆𝖑/𝖛𝖊𝖗𝖙𝖎𝖈𝖆𝖑 𝖈𝖔𝖔𝖗𝖉𝖎𝖓𝖆𝖙𝖊 (𝖎𝖓 𝖕𝖎𝖝𝖊𝖑𝖘) 𝖔𝖋 𝖙𝖍𝖊 𝖒𝖔𝖚𝖘𝖊 𝖕𝖔𝖎𝖓𝖙𝖊𝖗 𝖜𝖍𝖊𝖓 𝖙𝖍𝖊 𝖈𝖑𝖎𝖈𝖐 𝖊𝖛𝖊𝖓𝖙 𝖔𝖈𝖈𝖚𝖗𝖗𝖊𝖉, 𝖗𝖊𝖑𝖆𝖙𝖎𝖛𝖊 𝖙𝖔 𝖙𝖍𝖊 𝖑𝖊𝖋𝖙/𝖙𝖔𝖕 𝖊𝖉𝖌𝖊 𝖔𝖋 𝖙𝖍𝖊 𝖊𝖓𝖙𝖎𝖗𝖊 𝖉𝖔𝖈𝖚𝖒𝖊𝖓𝖙. Whereas 'clientX' and 'clientY' property returns the X/Y position (in pixels) relative to the left/top of the viewport

        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        // Generating random color in hex code
        let color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

        let ripples = document.createElement("span");
        // We already gave the 'btn' class a position of 'relative' in the CSS file
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";

        // Setting the border color of the span element randonly
        ripples.style.borderColor = color;

        // Appending the span element to the button element
        this.appendChild(ripples);

        // Removing the span element after 2 seconds
        setTimeout(() => {
            ripples.remove()
        }, 2000);
    }
})