local a = 0
local b = 1

for i = 1, 10 do
    local c = a + b
    a = b
    b = c
    print(c)
end
