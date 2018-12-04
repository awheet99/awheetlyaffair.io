<%
response.expires=-1
dim a(30)
a(1)="AnnElise"
a(2)="Belinda"
a(3)="Cathee"
a(4)="Dora"
a(5)="Enna"
a(6)="Fred"
a(7)="Greg"
a(8)="Happy"
a(9)="Indi"
a(10)="Jana"
a(11)="Katie"
a(12)="Leo"
a(13)="Mary"
a(14)="Nancy"
a(15)="Opi"
a(16)="Paula"
a(17)="Quincy"
a(18)="Radine"
a(19)="Sabrina"
a(20)="Tommie"
a(21)="Ursula"
a(22)="Veena"
a(23)="Weston"
a(24)="X"
a(26)="Yanni"
a(27)="Zeb"
a(28)="Tiffany"
a(29)="Jared"
a(30)="Jeff"

q=ucase(request.querystring("q"))

'lookup hints from array for length of q>0
if len(q)>0 then
  hint=""
  for i=1 to 30
    if q=ucase(mid(a(i),1,len(q))) then
      if hint="" then
        hint=a(i)
      else
        hint=hint & " , " & a(i)
      end if
    end if
  next
end if

'Display "no suggestion" if no hint were found or display the correct values
if hint="" then
  response.write("no suggestion")
else
  response.write(hint)
end if
%>