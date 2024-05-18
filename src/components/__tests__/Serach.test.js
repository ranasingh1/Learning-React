import { toBeInTheDocument } from "@testing-library/jest-dom"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux";
import store from "../../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mock/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Shimmer should load on Home Page", async () => {
    const { getByTestId } = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  
    const shimmer = getByTestId("shimmer");
    expect(shimmer.children.length).toBe(10);
  });
  
test("Restaurant should load on Home Page", async () => {
   const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );

    await waitFor(() => {
        expect(body.getByTestId("searchBtn"));
      });

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(9);  

      
  });

  test("Searching for a String food", async () => {
    const body = render(
       <StaticRouter>
         <Provider store={store}>
           <Body />
         </Provider>
       </StaticRouter> 
     );
     await waitFor(() => {
        expect(body.getByTestId("searchBtn"));
      });
      const input = body.getByTestId("search-input"); 

   
      fireEvent.change(input, {
        target: { value: "food" },
      })
 
       const searchBtn = body.getByTestId("searchBtn")
       fireEvent.click(searchBtn); 
       const resList = body.getByTestId("res-list");
       expect(resList.children.length).toBe(1);
  
    });


