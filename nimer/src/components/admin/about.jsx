import React from 'react'

function about() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col text-center mt-3">
                <h1 className="text-primary mb-4">שמי גבן עארף מפתח האתר
                   </h1>
               <h3> האתר נעשה ללקוח אמיתי שיש עוד הרבה מה להוסיף ולשפר
            אבל אני מקווה שעניתי בבנית האתר הזה לדרישות פרוייקט הגמר
            </h3>
          

             <h4>כדי לכנס לדף המנהל שניתן באמצעותו למחוק משתמשים או להציג משתמשים מסוג עובדים או לחפש עובדים או משתמשים לפי השם או המייל
                <br></br>
צריך לכנס לדף ההתחברות ואחר כך ללחוץ הל הרשמת עובד 
<br></br>
ולהקליד את הנתומים הבאים </h4>
<br></br>
<button className='btn btn-secondary mb-3 mt-3'>שם המשתמש: admin</button><br></br>
<button className='btn btn-secondary'>איימל:admin@admin.com</button><br></br>
<h5>הסיסמא היא לבחירתכם לא משנה מה לרשום</h5>
<div className="border border-2"></div>
               <p className='fs-4'>
                    רק עובדים מסוג עובד יש להם את ההרשאה לכנס לדף ההזמנות של המסעדה
                <br></br>
               לקנס לדף ההזמנות של העובדים צריך לרשם משתמשם בשם
               <br></br>
               <button className='btn btn-secondary mb-3 mt-3'>שם המשתמש: mltsar1 or mltsar2 or mltsar3</button>
               <br></br>
               <div className="border border-2"></div>

לפי בקשתו של פעל המסעדה הוא צריך לראות את ההזמנות של כול מלצר לחוד
אז השתמשתי ב "soket-io"
<br></br>
המסעדה בנויה כך שלא יהיה יותר משלושה מלצרים בכול המשמרות
<br></br>
אז הגבלתי את ההרשמה של העובדים עם הרשאת ההזמנות רק לשלושה
<br></br>
כדי לראות את ההזמנות של המלצרים צריך להרשם כעובד  בשם הבא      
               </p>
              
               <button className='btn btn-secondary mb-3 mt-3'>שם המשתמש: kitchen</button>
               <br></br>
               <span className='fs-4'>נעשה גם דף הרשמה ללקחות המסעדה כך אחרי הרשמת לקוח חדש הוא יכול לשלוח הזמנה שתקלט במסעדה</span>
               <br></br>
<span className='fs-4'>ניתן גם לראות את ההזמנות של כול לקוח ולמחוק אותם</span>
            </div>
        </div>
    </div>
  )
}

export default about