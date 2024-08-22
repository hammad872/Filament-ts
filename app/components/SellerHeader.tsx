export function SellerHeader({className = '', title, description, image, owner, joined_sice, owner_image,product_count , ...props}) {
    image = (image != null ? image : 'https://cdn.shopify.com/s/files/1/0226/4852/0768/files/logo_with_mark_250_x_64.png?v=1616271771');
    owner_image = (owner_image != null ? owner_image : 'https://cdn.shopify.com/s/files/1/0226/4852/0768/files/logo_with_mark_250_x_64.png?v=1616271771'); 
    return (
       <>
    <div className={"seller-info"}>
        <div className={"row"}>      
           <div className={"col-md-2 col-lg-2 col-sm-2 col-xs-12 wk-seller-logo mp-pad-15"}>
              <div className={"mp-store-logo mp-mrgn-btm-12 wk-parent-logo"}>
                 <div className={"wk-child-logo"}>
                    <img src={image} id="shop_logo_image"/>
                 </div>
              </div>
           </div>        
           <div className={"col-md-8 col-lg-8 col-sm-8 col-xs-12 "}>
              <div className={"row mp-mrgn-btm-12 mp-pad-15"}>
                 <div className={"mp-store-name mp-mrgn-btm-5"}><span>{title} </span></div>
                              
                 <div className={"mp-store-short-desc mp-mrgn-btm-5"}>
                    <p className={"styled_d"}><span>{description}</span></p>
                 </div>                       
                 <div className={"mp-color-gray mp-mrgn-btm-5"}>
                    <span>Joined Since {joined_sice} </span>
                    <span> | Total Products {product_count}</span>
                 </div>
                 <div className={"mp-mrgn-btm-5 hidden"} id="wk-store-like-block">
                    <button className={"btn button-primary"} id="wk-like-btn"><span className={"fa fa-thumbs-up"}></span><span id="wk-like-text" data-total-like="" data-total-count="" data-like=""></span><span id="wk-like-count"></span></button>
                    <input type="hidden" id="wk-like-label" data-label-like="Like Shop"/>
                    <input type="hidden" id="wk-liked-label" data-label-liked="Liked"/>
                 </div>
              </div>
           </div>         
           <div className={"col-md-2 col-lg-2 col-sm-2 col-xs-12 wk-seller-profile mp-pad-15"}>
              <div >SHOP OWNER</div>
                                    
              <div className={"mp-store-logo mp-mrgn-btm-12"}>
                 <img src={owner_image} id="store_logo_image" />
              </div> 
              <div className={"mp-mrgn-btm-12"}>
                 {owner}
              </div>
           </div>
        </div>
     </div>
     </>
     )
    }