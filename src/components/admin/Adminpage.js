import React, {useState, useEffect, useRef} from 'react';
import "./admin.css";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';

export default function Adminpage() {

    const [toggleMenuLeft, settoggleMenuLeft] = useState(false);
    const [menuSelect, setMenuSelect] = useState("create");
  

    const responsiveMobile = useMediaQuery('(max-width: 859px)');
    const responsiveextraMobile = useMediaQuery('(max-width: 634px)');

    //ref
   const myRef = useRef(null);



    const toggleMenu = () => {
        console.log("toggling menu");
        settoggleMenuLeft(!toggleMenuLeft);
    }


    const selectmenu = (data) => {
       if(data === "create") {
         setMenuSelect("create");
       } else if(data === "projects"){
          setMenuSelect("projects");
       } else {
          setMenuSelect("funds");
       }
    }


   const submitToken = async (e) => {
       e.preventDefault();
       
       const tokenName = e.target.tokenName.value;
       const tokenDescription = e.target.tokenDescription.value;
       const chain = e.target.chain.value;
       const imgUrl = e.target.imgUrl.value;
       const votes = e.target.votes.value;


        //make a call to the database and save the new token
       //save the amount transfered to the database
      const addToken = await fetch(`https://bscapp-backend.herokuapp.com/project`, 
      {
        method: 'POST',   
         headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       body: JSON.stringify({ 
           tokenName: tokenName, 
           tokenDescription: tokenDescription,
           chain: chain,
           imgUrl: imgUrl,
           votes: votes
        })
     }
     );
     const checkprojectsaved = await addToken.json();
     /* use checkpoolsaved to notify the user that their transaction has been saved it returns true if it was successfull or false if it was bad*/
     console.log(checkprojectsaved);


     e.target.tokenName.value = "";
     e.target.tokenDescription.value = "";
     e.target.chain.value = "";
     e.target.imgUrl.value = "";
     e.target.votes.value = "";



    }





//useEffects
useEffect(() => {


    const handleClickOutside = (event) => {
      //console.log(myRef);
     if(myRef.current === null){
  
    } else if( Object.keys(myRef).length !== 0 ) {
    
     // console.log("In here");
      if (!myRef.current.contains(event.target)) {
        settoggleMenuLeft(false);
         //console.log("called");
      }
  
    }
  
  
  
    };
    
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
   



  return (

      <Grid className='overall' container spacing={1}>

        { responsiveMobile  ?
        
        <Grid item xs={ toggleMenuLeft ? 7 : 1.5} className={responsiveMobile ? "mobile-grid" : "main-grid"} >
            { !toggleMenuLeft ?

            <DehazeIcon className="menuIcon"  onClick={toggleMenu} />
            :
            <div className="contain-menuMobile"  ref={myRef}>


                    <div className={ menuSelect === "create" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("create")}>create project</div>
                    <div className={ menuSelect === "projects" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("projects")}>projects</div>
                    <div className={ menuSelect === "funds" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("funds")}>Funds</div>

            </div>
            }
        </Grid>

        : 

        <Grid className='leftside-pc' item xs={   3 }>
            <div className='leftside-menu'>

                <div className={ menuSelect === "create" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("create")}>create project</div>
                <div className={ menuSelect === "projects" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("projects")}>projects</div>
                <div className={ menuSelect === "funds" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("funds")}>Funds</div>

            </div>
        </Grid>
        }



        <Grid className='right-side' item xs={ !responsiveMobile ?  9 :  12  }>
            
            {
             menuSelect === "create" 
             ?
                    <form className='loginForm2' onSubmit={submitToken}>
                        <div className='container-for-insideForm2'>
                            <div className='inputCover2'>
                                <input name='tokenName' type="text" placeholder='Token name'   />
                            </div>
                    
                            <div className='inputCover2'>
                                <input name='tokenDescription' type="text" placeholder='Description'   />
                            </div>

                            <div className='inputCover2'>
                                <input name='chain'  placeholder='chain'   />
                            </div>

                            <div className='inputCover2'>
                                <input name='imgUrl' type="text"  placeholder='image url'   />
                            </div>

                            <div className='inputCover2'>
                                <input name='votes' type="number"  placeholder='votes, set to zero'   />
                            </div>
                    
                            <Button type='submit' variant="outlined">Sumbit</Button>
                        </div>
                    </form>

             : menuSelect === "projects" 
              ?
                <div>
                   projects
                </div>
             :

                <div>
                    funds
                </div>


            }
           
 


        </Grid>




        </Grid>

  )
}

