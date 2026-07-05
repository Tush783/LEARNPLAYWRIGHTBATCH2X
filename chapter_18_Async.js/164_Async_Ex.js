// //Basic Async and Await
// async function getTestResult(){
//     return "Pass";
// }

// getTestResult.then(function(res){
//     console.log(res);
// });

import {test , expect} from '@playwright/test';

test('has title', async ({page})=>{
    await page.goto('https://playwright.dev/');
    //expect a title "to contain" a substring
    await expect(page).toHaveTitle(/Playwright/);
});