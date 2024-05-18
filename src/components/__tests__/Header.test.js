import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../../utils/store"
import { StaticRouter } from "react-router-dom/server"

//UNIT test
test('Logo Should load on rendering header', () => { 
    const header = render(
     <StaticRouter>   
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    );
     
   const logo = header.getAllByTestId("logo");  
   expect(logo[0].src).toBe("http://localhost/dummy.png");
 })
 test("Online Status Should be Online", () => { 
  const header = render(
    <StaticRouter>   
      <Provider store={store}><Header/></Provider>
    </StaticRouter>
  );
   
  const onlineStatus = header.getByTestId("online-status");  
  expect(onlineStatus.innerHTML).toBe("Online ");
});
test("Cart should have Zero Items", () => { 
  const header = render(
    <StaticRouter>   
      <Provider store={store}><Header/></Provider>
    </StaticRouter>
  );
   
  const cart = header.getByTestId("cart");  
  // Use `toBe` to check for strict equality
  expect(cart.innerHTML).toBe("Cart-0");
});

 
