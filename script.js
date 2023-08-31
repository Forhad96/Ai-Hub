// Load Data form api
const loadData = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const tools = data.data.tools;
    // console.log(data);
    displayAiTools(tools)
}
// Display card data 
const displayAiTools = (aiTools) =>{
    console.log(aiTools);
    const aiToolsContainer = document.getElementById('ai-container');
    aiTools.forEach(tools => {
        const div = document.createElement('div');
        div.classList = 'card bg-base-100 shadow-xl'
        div.innerHTML = `
        <figure class="px-8 pt-8">
        <img src="${tools.image?tools.image:''}" onerror="setDefaultImage(this)" class="rounded-xl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Features</h2>
        <p>${tools?.features[0]?tools?.features[0]:''}</p>
        <p>${tools?.features[1]?tools?.features[1]:''}</p>
        <p>${tools?.features[2]?tools?.features[2]:''}</p>
        <hr>
        <div class="flex justify-between items-center">
          <div class="space-y-3">
            <h2 class="card-title">${tools?.name}</h2>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>                
              <p>${tools?.published_in}</p>
            </div>
          </div>
          
          <img onclick= "modalHandler('${tools.id}')" src="./image/arrowicon.png" class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer" alt="">
        </div>
      </div>
        `

        aiToolsContainer.appendChild(div)
    });
}

// Display modal Data

const modalHandler = async (toolsId) =>{
    // console.log(toolsId);
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${toolsId}`)
    const data = await res.json();
    const singleData = data.data;
    console.log(singleData);
  const modalContainer = document.getElementById('modal-container');
  modalContainer.innerHTML = `

<dialog id="ai-modal" class="modal">
  <form method="dialog" class="modal-box  w-9/12 max-w-5xl">
    <button class="btn btn-sm btn-circle btn-error absolute right-2 top-2">✕</button>
    <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 m-2">
    <div class="card w-full lg:w-1/2 lg:min-h-[500px] bg-red-100 shadow-xl">

      <div class="card-body items-center space-y-5">
        <h2 class="card-title text-center font-bold">${singleData?.description}</h2>

        <div class="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div class="stats shadow">
          <h2 class="stat text-2xl font-bold text-green-600">$10/ <br>month <br> Basic</h2>
          </div>
          <div class="stats shadow">
          <h2 class="stat text-2xl font-bold text-orange-600">$30/ <br>month <br> Basic</h2>
          </div>
          <div class="stats shadow">
          <h2 class="stat text-2xl font-bold text-red-500">$50/ <br>month <br> Basic</h2>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div>
            <h2 class="text-2xl font-bold">Features</h2>
            <p>1.${singleData?.features[1]?.feature_name}</p>
            <p>2.${singleData?.features[2]?.feature_name}</p>
            <p>3.${singleData?.features[3]?.feature_name}</p>
          </div>
          <div>
            <h2 class="text-2xl font-bold">Integrations</h2>
            <p>1.${singleData.integrations[0]?singleData.integrations[0]:"No Data Found"}</p>
            <p>2.${singleData.integrations[1]?singleData.integrations[1]:"No Data Found"}</p>
            <p>3.${singleData.integrations[2]?singleData.integrations[2]:"No Data Found"}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card w-full lg:w-1/2 lg:min-h-[500px] bg-red-50 shadow-xl">
      <figure class="px-8 pt-8 relative">
        <img src="${singleData?.image_link[1]}" alt="" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Hi, how are you doing today?!</h2>
        <p>I'm doing well, thank you for asking. How can I assist you today?</p>
      </div>
    </div>
  </div>
  </form>
</dialog>

  `
  const aiModal = document.getElementById('ai-modal');
  aiModal.showModal()
}


// if didn't find any img the this function  set a default image
function setDefaultImage(img) {
  img.src = "./image/notfond.png";
}

loadData()