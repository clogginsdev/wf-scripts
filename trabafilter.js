const url = 'https://api.airtable.com/v0/appUHJsbv8PTxI31A/All%20Published%20Postings'
const headers = {
    'Authorization': 'Bearer keygwkpFH6o6i2C4N',
}
const selectLocation = document.getElementById('By-Location');
const selectDepartment = document.getElementById('By-Department');
const leverGeneral = document.getElementById('leverItems-general');
const leverEngineering = document.getElementById('leverItems-engineering');
const leverSales = document.getElementById('leverItems-sales');
const leverOperations = document.getElementById('leverItems-operations');
const filterSet = document.getElementById('filter-set');

function state() {
    fetch(url, { headers })
        .then(res => res.json())
        .then(data => {
            const dataArray = data.records;
            // filter the items by the engineering department
            const engArr = dataArray.filter(item => item.fields.Department === 'Engineering');
            // filter the items by the sales department
            const salesArr = dataArray.filter(item => item.fields.Department === 'Sales & Account Management');
            // filter the items by the operations & strategy department
            const opsArr = dataArray.filter(item => item.fields.Department === 'Operations & Strategy');
            // filter the items by the general department
            const genArr = dataArray.filter(item => item.fields.Department === 'General');
            // map the items to the lever-group
            genArr.map(item => {
                leverGeneral.innerHTML += `
                <a data-loc="${item.fields.Location}" href="${item.fields.LeverUrl}" target="_blank"  class="career-item">
                      
                       <div class="career-item-content">
                       <div class="career-item-title">${item.fields.Name}</div>
                       <div class="career-location-div">${item.fields.Location}</div>
                   </div>
                    <img src="https://uploads-ssl.webflow.com/60e1ab349006f8ded30b5022/62c33b064b79cafe98e80613_triangle-arrow.svg" class="careers-arrow" alt="Go to the job listing" />

            </a>
                `
            });
            engArr.map(item => {
                leverEngineering.innerHTML += `
                <a data-loc="${item.fields.Location}" href="${item.fields.LeverUrl}" target="_blank"  class="career-item">
                      
                       <div class="career-item-content">
                       <div class="career-item-title">${item.fields.Name}</div>
                       <div class="career-location-div">${item.fields.Location}</div>
                   </div>
                    <img src="https://uploads-ssl.webflow.com/60e1ab349006f8ded30b5022/62c33b064b79cafe98e80613_triangle-arrow.svg" class="careers-arrow" alt="Go to the job listing" />
            </a>
                `
            });
            opsArr.map(item => {
                leverOperations.innerHTML += `
                <a data-loc="${item.fields.Location}" href="${item.fields.LeverUrl}"  target="_blank" class="career-item">
                      
                       <div class="career-item-content">
                       <div class="career-item-title">${item.fields.Name}</div>
                       <div class="career-location-div">${item.fields.Location}</div>
                   </div>
                    <img src="https://uploads-ssl.webflow.com/60e1ab349006f8ded30b5022/62c33b064b79cafe98e80613_triangle-arrow.svg" class="careers-arrow" alt="Go to the job listing" />
            </a>
            
                `
            });
            salesArr.map(item => {
                leverSales.innerHTML += `
                <a data-loc="${item.fields.Location}" href="${item.fields.LeverUrl}"  target="_blank" class="career-item">
                      
                       <div class="career-item-content">
                       <div class="career-item-title">${item.fields.Name}</div>
                       <div class="career-location-div">${item.fields.Location}</div>
                   </div>
                    <img src="https://uploads-ssl.webflow.com/60e1ab349006f8ded30b5022/62c33b064b79cafe98e80613_triangle-arrow.svg" class="careers-arrow" alt="Go to the job listing" />
            </a>
                `
            });
        }); // end data

}
// end of state
state();



filterSet.addEventListener('change', (e) => {
    const filter = selectLocation.value;
    const filter2 = selectDepartment.value;
    const Wrappers = document.querySelectorAll('.lever-jobs-div');
    console.log(e.target.value);
    Wrappers.forEach(wrapper => {
        const link = wrapper.querySelectorAll('a');
        console.log(link)
        switch (filter2) {
            case 'All':
            wrapper.classList.remove('hide'); 
            if (filter !== 'All') {
                if (!wrapper.innerHTML.includes(filter)) {
                    wrapper.classList.add('hide');
                } else if (wrapper.innerHTML.includes(filter)) {
                    wrapper.classList.remove('hide');
                }
            }
            // if the link doesn't match filter, hide it and the wrapper's h2
            link.forEach(item => {
                if ( filter === 'All') {
                    item.classList.remove('hide');
                } else if (item.dataset.loc !== filter) {
                    item.classList.add('hide');
                } else {
                    item.classList.remove('hide');
                }           
            })

            break;
            case 'Engineering':
            // if the wrappper doesn't match the filter, hide it
            if (wrapper.dataset.dept !== filter2) {
                wrapper.classList.add('hide');
            } else {
                wrapper.classList.remove('hide');
            }
            // if the filter is not 'All' and the wrapper innertext doesn't include the filter , hide the wrapper
            const wrapperClass = wrapper.classList.contains('engineering');
            console.log(wrapper.innerText);
            if (filter !== 'All') {
                if (!wrapper.innerHTML.includes(filter) && wrapperClass) {
                    wrapper.classList.add('hide');
                } else if (wrapperClass && wrapper.innerHTML.includes(filter)) {
                    wrapper.classList.remove('hide');
                }
            }
            // if the links do not match filter hide them
            link.forEach(item => {
                if (filter === 'All') {
                    item.classList.remove('hide')
                } else if (item.dataset.loc !== filter) {
                    item.classList.add('hide');
                } else {
                    item.classList.remove('hide');
                }    
                })
            // hide the h2 if all the links have a class of 'hide'
                
            
            break;
            case 'Operations & Strategy':
            // if the wrappper doesn't match the filter, hide it
            if (wrapper.dataset.dept !== filter2) {
                wrapper.classList.add('hide');
            } else {
                wrapper.classList.remove('hide');
            }
            const wrapperClass3 = wrapper.classList.contains('operations');
            console.log(wrapper.innerText);
            if (filter !== 'All') {
                if (!wrapper.innerHTML.includes(filter) && wrapperClass3) {
                    wrapper.classList.add('hide');
                } else if (wrapperClass3 && wrapper.innerHTML.includes(filter)) {
                    wrapper.classList.remove('hide');
                }
            }
            // if the links do not match filter hide them
            link.forEach(item => {
                if (filter === 'All') {
                    item.classList.remove('hide')
                } else if (item.dataset.loc !== filter) {
                    item.classList.add('hide');
                } else {
                    item.classList.remove('hide');
                }    
                })
            break;
            case 'Sales & Account Management':
            // if the wrappper doesn't match the filter, hide it
            if (wrapper.dataset.dept !== filter2) {
                wrapper.classList.add('hide');
            } else {
                wrapper.classList.remove('hide');
            }
            const wrapperClass2 = wrapper.classList.contains('sales');
            console.log(wrapper.innerText);
            if (filter !== 'All') {
                if (!wrapper.innerHTML.includes(filter) && wrapperClass2) {
                    wrapper.classList.add('hide');
                } else if (wrapperClass2 && wrapper.innerHTML.includes(filter)) {
                    wrapper.classList.remove('hide');
                }
            }
            // if the links do not match filter hide them
            link.forEach(item => {
                if (filter === 'All') {
                    item.classList.remove('hide')
                } else if (item.dataset.loc !== filter) {
                    item.classList.add('hide');
                } else {
                    item.classList.remove('hide');
                }    
                })
            break;
            case 'General':
            // if the wrappper doesn't match the filter, hide it
            if (wrapper.dataset.dept !== filter2) {
                wrapper.classList.add('hide');
            } else {
                wrapper.classList.remove('hide');
            }
            // if the links do not match filter hide them
            const wrapperClass1 = wrapper.classList.contains('general');
            console.log(wrapper.innerText);
            if (filter !== 'All') {
                if (!wrapper.innerHTML.includes(filter) && wrapperClass1) {
                    wrapper.classList.add('hide');
                } else if (wrapperClass1 && wrapper.innerHTML.includes(filter)) {
                    wrapper.classList.remove('hide');
                }
            }
            // if the links do not match filter hide them
            link.forEach(item => {
                if (filter === 'All') {
                    item.classList.remove('hide')
                } else if (item.dataset.loc !== filter) {
                    item.classList.add('hide');
                } else {
                    item.classList.remove('hide');
                }    
                })
            break;
            default:
            break;          
    }
});
});
