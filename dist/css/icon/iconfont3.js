;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shipin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M854.464257 144.652518 170.275593 144.652518c-58.328453 0-105.783255 47.453778-105.783255 105.783255l0 513.766226c0 58.332547 47.454802 105.784278 105.783255 105.784278L854.464257 869.986277c58.329477 0 105.783255-47.451732 105.783255-105.784278L960.247512 250.435773C960.242396 192.105273 912.788617 144.652518 854.464257 144.652518L854.464257 144.652518zM891.401518 793.020348c-0.005117 4.613064-3.749394 8.359388-8.359388 8.359388L141.295562 801.379737c-2.235924 0-4.334725-0.870834-5.91164-2.451842-1.576915-1.572822-2.447748-3.669576-2.447748-5.90243l0.00307-571.286268c0-4.604878 3.749394-8.355295 8.356318-8.355295l741.749638 0c2.230808 0 4.328585 0.870834 5.906523 2.448772 1.577938 1.577938 2.448772 3.676739 2.448772 5.9055L891.400494 793.020348 891.401518 793.020348zM680.246377 485.72559 434.661076 307.114656c-4.591575-3.346211-10.022261-5.109368-15.706727-5.109368-4.189416 0-8.378831 1.006933-12.113899 2.905166-8.997931 4.584412-14.588253 13.700023-14.588253 23.794939l0 357.226984c0 10.093892 5.589298 19.209504 14.588253 23.795962 3.735068 1.89721 7.924483 2.90312 12.113899 2.90312 5.684466 0 11.115152-1.76418 15.706727-5.104251L680.246377 528.912182c6.885827-5.010107 10.992355-13.08297 10.992355-21.594831C691.238732 498.80549 687.131181 490.730581 680.246377 485.72559L680.246377 485.72559zM615.007537 510.321778 451.555861 629.201306c-0.647753 0.467651-1.413186 0.707105-2.183735 0.707105-0.576121 0-1.152243-0.132006-1.683339-0.401136-1.246387-0.63445-2.031263-1.915629-2.031263-3.311419l0-237.754962c0-1.39579 0.784876-2.674922 2.031263-3.309372 1.243317-0.63445 2.739391-0.515746 3.867074 0.303922l163.451676 118.881574c0.960885 0.695848 1.531889 1.811252 1.531889 3.001357C616.539426 508.503363 615.968421 509.62593 615.007537 510.321778L615.007537 510.321778zM615.007537 510.321778"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianmingongjumeishicaipu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M940.679851 503.125889c-14.349823-16.416901-35.084053-25.832342-56.885592-25.832342L707.854155 477.293547c8.422833-26.504654 13.135158-50.743708 14.007015-72.26486 0.560772-13.846356-0.483001-26.414603-3.115967-37.655621 1.004887-0.177032 1.968841-0.645706 2.744507-1.421372l226.673579-226.672556c7.463995-7.463995 7.463995-19.565615 0-27.02961l-36.673248-36.673248c-7.463995-7.463995-19.565615-7.463995-27.02961 0l-226.672556 226.672556c-0.776689 0.776689-1.245364 1.740644-1.421372 2.746554-11.239995-2.632967-23.808242-3.677762-37.654598-3.119037-27.154453 1.100054-58.622142 8.289804-93.52814 21.369703-61.657268 23.104207-127.291105 62.836117-163.323762 98.867752-16.452717 16.452717-29.795607 35.130102-39.643905 55.178717L139.616316 477.292524c-21.802562 0-42.536792 9.41544-56.886615 25.833365-14.415314 16.492626-20.999266 38.425148-18.062378 60.172451 14.478759 107.232257 67.390853 205.868741 148.988266 277.739629 82.34852 72.53092 188.19829 112.474654 298.05021 112.474654s215.700667-39.944757 298.049187-112.474654c81.597413-71.869864 134.51053-170.506349 148.989289-277.739629C961.679118 541.551036 955.096189 519.618515 940.679851 503.125889zM346.607624 527.497972l15.229866 0c-7.619538 12.056594-14.077623 24.210401-19.213597 36.2189C342.392626 551.752376 343.725994 539.569916 346.607624 527.497972zM612.686678 477.293547 574.845839 477.293547l84.870969-84.871993c-7.132444 17.582447-18.331507 38.990013-32.649608 62.346977C622.523721 462.182384 617.702925 469.725174 612.686678 477.293547zM397.450592 654.688793l127.190821-127.190821 52.173267 0c-17.496489 22.791076-35.207873 43.536562-50.620911 58.950623C479.604684 633.036657 428.036191 656.361899 397.450592 654.688793zM631.318014 364.019691 518.045181 477.293547l-58.977229 0c30.944779-27.110451 72.090898-57.44534 109.902062-80.623225C592.328002 382.351198 613.735567 371.152135 631.318014 364.019691zM467.839733 527.497972l-98.699929 98.699929c-0.535189-9.815553 1.417279-21.790282 5.89936-34.965349 7.046486-20.713764 19.396769-42.583864 35.790134-63.73458L467.839733 527.497972zM554.594609 614.848413c22.252817-22.252817 48.246841-53.894468 72.241324-87.35044l17.356296 0c-20.652366 42.071188-47.208185 82.219583-70.969355 105.980753-28.345582 28.346605-64.639183 45.194318-102.193497 47.441499-2.836605 0.169869-5.647627 0.25378-8.443299 0.25378-0.883113 0-1.762133-0.013303-2.64013-0.029676C492.006132 667.450445 525.112134 644.329864 554.594609 614.848413zM660.361491 477.293547c1.807159-2.931772 3.583618-5.850242 5.313006-8.747221 2.068102-3.464915 4.057409-6.870478 5.981225-10.227945-1.815345 6.154163-3.871167 12.484336-6.170536 18.975167L660.361491 477.293547zM390.25982 450.514647c31.845289-31.845289 93.121887-68.713988 149.016919-89.657996 9.016351-3.378957 17.73799-6.293333 26.139334-8.771781-3.355421 1.922792-6.759961 3.911076-10.223852 5.978155-52.261271 31.194466-111.056352 75.835176-146.301064 111.081934-2.686179 2.686179-5.313006 5.406127-7.891737 8.148587l-32.556487 0C374.625748 467.87299 381.897362 458.877105 390.25982 450.514647zM908.989081 556.580335c-5.556553 41.150212-17.377786 80.183204-34.386158 116.213815-40.171931 17.857716-91.87857 44.428885-157.332305 79.695087C621.31315 804.191782 508.514107 805.682739 363.876939 695.339632c-82.552158-62.978357-173.35728-76.895321-236.106416-77.240175-5.994528-19.87363-10.500145-40.416502-13.349029-61.520145-1.013073-7.497765 1.157359-14.747889 6.110161-20.413935 4.885264-5.589298 11.662621-8.667404 19.084661-8.667404l165.903517 0c-1.393743 7.532557-2.335185 15.146978-2.793626 22.811542-2.888793 48.275493 13.334703 92.675726 45.680389 125.023458 29.888727 29.887704 70.063729 46.00887 114.083292 46.00887 3.620457 0 7.270591-0.109494 10.939143-0.329505 47.369867-2.833535 92.897783-23.834848 128.195707-59.132772 30.425963-30.425963 63.488986-81.95864 86.952374-134.381593l195.21817 0c7.42204 0 14.199397 3.078105 19.084661 8.667404C907.831722 541.832446 910.002155 549.08257 908.989081 556.580335z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaotieshi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M683.918 668.673c-32.61 27.295-56.165 46.995-56.165 76.125l0.045 26.47-83.12 0L544.678 546.708l89.35-89.917c12.725-12.81 12.64-33.508-0.15-46.232-12.81-12.68-33.47-12.657-46.235 0.153l-75.645 76.125-86.387-86.952c-12.745-12.79-33.42-12.855-46.252-0.152-12.767 12.722-12.855 33.422-0.132 46.232l100.092 100.745 0 224.559-83.052 0 0-26.47c0-31.05-25.95-52.79-58.782-80.33-55.08-46.17-130.507-109.395-130.507-234.714 0-170.9 136.847-309.922 305.022-309.922 168.2 0 305.019 139.022 305.019 309.922C817.018 557.299 736.928 624.313 683.918 668.673M579.538 904.167 444.481 904.167c-25.885 0-47.04-20.915-48.302-47.125 0.065-0.805 0.087-1.61 0.087-2.44l0-17.975 231.622 0 0.04 17.975C627.928 881.928 606.228 904.167 579.538 904.167M511.999 54.47c-204.232 0-370.382 168.35-370.382 375.284 0 155.824 96.32 236.564 153.86 284.804 13.183 11.045 30.96 25.945 35.427 33.005l0 48.105c-0.698 2.66-1.198 5.405-1.198 8.28 0 2.88 0.5 5.62 1.198 8.28l0 39.24c-0.11 1.045-0.153 2.07-0.153 3.135 0 63.355 51.025 114.93 113.73 114.93l135.057 0c62.725 0 113.75-51.575 113.75-114.93l-0.06-42.635c0.65-2.57 1.11-5.23 1.11-8.02 0-2.81-0.48-5.49-1.16-8.105l-0.06-47.125c4.855-6.58 20.215-19.435 32.765-29.915 58.52-48.995 156.495-130.985 156.495-289.049C882.378 222.819 716.228 54.47 511.999 54.47z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)