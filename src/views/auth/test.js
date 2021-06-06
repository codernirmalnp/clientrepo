<Mui.Grid container direction="row" className="logo">
<Mui.Grid item xs={12} md={4} >
    <Mui.Card className="auth_v3_card">
             <MallingIcon className="auth_v3_card__head"/>  
    </Mui.Card>    
</Mui.Grid>
<Mui.Grid item xs={12} md={8}>
    <Mui.Grid container direction="column">
        <Mui.Grid item className="right">
             <Mui.Typography className="right__helperText">
                 <span className="right__helperText__trouble">
                     Finding Trouble,
                 </span>
                 <Mui.Link className="right__helperText__helpinghand">
                     lets help you
                 </Mui.Link>
            </Mui.Typography>
        </Mui.Grid>
     <div className="main_content">
        <Mui.Grid item className="type">
             <Mui.Typography className="type__loginTypes" >
                 Choose the type of Login
             </Mui.Typography>
             <Mui.Typography className="type__loginDetails">
                 You have selected as   {this.state.subtitle}
             </Mui.Typography>

        </Mui.Grid>
    <div>
    <Mui.Grid item className="card d-flex" >
        {
           tabs.map((item,index)=>(
               <Mui.Card key={index} className="card__item">   
                        <div>{item.icon}</div>  
                        <Mui.Typography>{item.label}</Mui.Typography>                                    
               </Mui.Card>
           ))
        }
        
    </Mui.Grid>
    </div>
      
    </Mui.Grid>
</Mui.Grid>

</Mui.Grid>