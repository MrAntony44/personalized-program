function change(){
  checkForExistingCookies()
    let res = document.getElementById("class")
    let ls = document.getElementById("classls")
    let specialB = document.getElementById("specialB")
    let specialC = document.getElementById("specialC")

    // unhide class list global
    if(lsAllow()){
      ls.classList.remove("hidden")
      document.getElementById("class").classList.add("select1Side")
    }else if(!lsAllow()){
      ls.classList.add("hidden")
      document.getElementById("class").classList.remove("select1Side")
    }

    if(directAllow()){
      if(res.value == "Β"){
        specialB.classList.remove("hidden")
        document.getElementById("classls").classList.add("select2Side")
      }else if(res.value == "Γ"){
        specialC.classList.remove("hidden")
        document.getElementById("classls").classList.add("select2Side")
      }
    }else if(!directAllow()){
      if(!specialB.classList.contains("hidden")){
        specialB.classList.add("hidden")
        document.getElementById("classls").classList.remove("select2Side")
      }
      if(!specialC.classList.add("hidden")){
        specialC.classList.add("hidden")
        document.getElementById("classls").classList.remove("select2Side")
      }
    }

    if(res.value == "Α"){
      if(!specialC.classList.contains("hidden")){
        specialC.classList.add("hidden")
      }
      if(!specialB.classList.contains("hidden")){
        specialB.classList.add("hidden")
      }
    }

    if(res.value == "Β" && ls.value !=""){
      if(!specialC.classList.contains("hidden")){
        specialC.classList.add("hidden")
      }
    }
    if(res.value == "Γ" && ls.value !=""){
      if(!specialB.classList.contains("hidden")){
        specialB.classList.add("hidden")
      }
    }

    if(buttonAllow()){
      document.getElementById("btn").classList.remove("hidden")
      if(res.value == "Β"){
        document.getElementById("specialB").classList.add("select3Side")
      }else if(res.value == "Γ"){
        document.getElementById("specialC").classList.add("select4Side")
      }else if(res.value == "Α"){
        document.getElementById("classls").classList.add("select2Side")
      }

    }else{
      document.getElementById("btn").classList.add("hidden")
      if(document.getElementById("specialB").classList.contains("select3Side")){
        document.getElementById("specialB").classList.remove("select3Side")
      }
      if(document.getElementById("specialC").classList.contains("select4Side")){
        document.getElementById("specialC").classList.remove("select4Side")
      }
      if(document.getElementById("classls").classList.contains("select2Side")){
        document.getElementById("classls").classList.contains("select2Side")
      }
    }
  }

  function lsAllow(){
    let res = document.getElementById("class").value
    let ls = document.getElementById("classls").value
    let specialB = document.getElementById("specialB")
    let specialC = document.getElementById("specialC")

    if(res !=""){
      return true;
    }else{
      return false
    }
  }

  function directAllow(){
    let res = document.getElementById("class").value
    let ls = document.getElementById("classls").value
    let specialB = document.getElementById("specialB")
    let specialC = document.getElementById("specialC")

    if(res != "" && ls !=""){
      if(res != "A"){
        return true
      }else{
        return false
      }
    }
    return false;
  }

  function buttonAllow(){
    let res = document.getElementById("class").value
    let ls = document.getElementById("classls").value
    let specialB = document.getElementById("specialB")
    let specialC = document.getElementById("specialC")
    if(res !="" && ls!=""){
      if(res == "Α"){
        return true
      }else{
        if(res == "Β"){
          if(specialB.value !=""){
            return true
          }else{
            return false
          }
        }else if(res == "Γ"){
          if(specialC.value !=""){
            return true
          }else{
            return false
          }
        }
      }
    }
    return false;
  }

  function validate(){
    let res = document.getElementById("class").value
    let ls = document.getElementById("classls").value

    if(res == "Α"){
      window.location.href = "/find?class=" + res + ls + "&special=none"
      writeCookie(res+ls, "none")
    }else if(res == "Β"){
      let direct = document.getElementById("specialB").value
      window.location.href = "/find?class=" + res + ls + "&special=" + direct
      writeCookie(res+ls, direct)
    }else if(res == "Γ"){
      let direct = document.getElementById("specialC").value
      window.location.href = "/find?class=" + res + ls + "&special=" + direct
      writeCookie(res+ls, direct)
    }
  }

  function writeCookie(cl, special){
    let classCook = "class=" + cl + '; path=/; max-age=31536000'
    let specialCook = "special=" + special + '; path=/; max-age=31536000'
    document.cookie = classCook
    document.cookie = specialCook
  }

  function checkForExistingCookies(){
    let cookiePath = document.cookie
    let classAct = cookiePath.substring(6).substring(0,2)
    let specialAct = cookiePath.substring(18)
    if(classAct == ""){
      return;
    }
    document.getElementById("tableCook").style.display = "block"
    
    let fillArea = document.getElementById("cookieData")
    console.log(fillArea)
    fillArea.setAttribute("href", "/find?class=" + classAct + "&special="+ specialAct)
    fillArea.innerHTML = classAct + ' ' + specialAct

  }

  function reset(id){
    document.getElementById(id).selectedIndex = 1; //1 = option 2\
  }