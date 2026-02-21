$.when($.ready).then(() => {
    const initial = $(".initial")

    setTimeout(() => initial.removeClass("initial"), 500)
})