import React from 'react'

export default function Features(props) {
  return (
    <div className="maincontainer" style={{backgroundColor: props.mode === 'dark'? '#042743':'white',color: props.mode === 'dark'? 'white':'black'}} >
      <div className='container' >
        <h1 className='mt-5 mb-5'>Features of Textutils App</h1>
        </div>
        <div className='container' >
<h3>Convert text To UpperCase</h3>
<p>Exercitation nisi veniam est excepteur excepteur irure et nostrud laborum irure. Et mollit deserunt ex amet commodo. Enim fugiat occaecat cupidatat nisi aliquip enim tempor. Velit tempor excepteur sunt esse ea cupidatat cillum ipsum nisi eu tempor labore.</p>
        </div>
        <div className='container' >
        <h3>Convert text To lowerCase</h3>
        <p>Exercitation minim consectetur elit velit nisi quis eu duis enim id commodo ex. Anim proident cillum velit commodo est reprehenderit cupidatat. Voluptate Lorem culpa ea nostrud. Occaecat Lorem aute tempor velit mollit elit sunt consectetur eiusmod ex tempor voluptate commodo elit. Est do aute sit elit.</p>
        </div>
        <div className='container' >
        <h3>Clear text</h3>
        <p>Tempor consequat minim aute amet sint velit. Sit occaecat in nisi officia Lorem amet. Labore laborum laborum proident labore tempor aliqua in nostrud aute veniam nisi elit dolore. Reprehenderit anim do non nulla laborum nostrud nulla duis eu minim excepteur ut. Est ipsum occaecat consequat minim aliqua sint ullamco. Eu non culpa eu amet et ipsum elit exercitation non cillum ea eiusmod.

Non cillum ad adipisicing amet irure est sint tempor cillum quis sunt incididunt pariatur. Laborum laborum nulla esse culpa exercitation duis excepteur ut ea sunt velit. Exercitation ipsum fugiat exercitation eu laborum incididunt consectetur fugiat quis exercitation ex laboris excepteur.

Mollit tempor nostrud ex ipsum. Culpa adipisicing cillum quis magna labore ea. Ad amet duis consectetur id ipsum deserunt ea qui commodo amet aute. Id excepteur et ad ipsum esse dolore qui exercitation veniam minim sit labore deserunt magna.</p>
        </div>
    </div>
  )
}

